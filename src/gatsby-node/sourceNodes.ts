import { GatsbyNode, SourceNodesArgs } from "gatsby"
import appRoot from "app-root-path"
import glob from "fast-glob"
import path from "path"
import grayMatter from "gray-matter"
import { promises as fs } from "fs"
import { Record, String, Static, Partial, Number, Array } from "runtypes"
import md5file from "md5-file"
import replaceExt from "replace-ext"
import { exec } from "child-process-promise"
import marked from "marked"
import sanitizeHTML from "sanitize-html"

export const PhotoMetadata = Record({
  format: String,
  mimeType: String,
  geometry: Record({
    width: Number,
    height: Number,
    x: Number,
    y: Number,
  }),
  orientation: String,
})
export type PhotoMetadata = Static<typeof PhotoMetadata>

export const Photo = Record({
  path: String,
  hash: String,
  aspectRatio: Number,
  metadata: PhotoMetadata,
}).And(
  Partial({
    title: String,
    date: String,
    process: String,
    description: String,
  })
)
export type Photo = Static<typeof Photo>

export const Album = Record({
  title: String,
  path: String,
  photos: Array(Photo),
  description: String,
})
export type Album = Static<typeof Album>

export async function loadAlbum(filename: string): Promise<Album> {
  const { content, data: metadata } = grayMatter(
    await fs.readFile(filename, { encoding: "utf-8" })
  )
  const description = sanitizeHTML(marked(content))
  const photos = await Promise.all(
    (await findPhotos(path.dirname(filename))).map(
      async photo => await loadPhoto(photo)
    )
  )
  const albumPath = path.dirname(
    path.relative(path.join(appRoot.toString(), "photos"), filename)
  )
  return Album.check({ ...metadata, path: albumPath, description, photos })
}

export async function findAlbums(): Promise<string[]> {
  const cwd = path.resolve(appRoot.toString(), "photos")
  const albums = glob("**/album.md", { cwd }).then(albums =>
    albums.map(album => path.resolve(cwd, album))
  )
  return albums
}

export async function loadPhoto(filename: string): Promise<Photo> {
  const contents = await fs.readFile(filename)
  return Photo.check(JSON.parse(contents.toString()))
}

export async function findPhotos(directory: string): Promise<string[]> {
  const photos = glob("**/*.json", { cwd: directory }).then(photos =>
    photos.map(photo => path.resolve(directory, photo))
  )
  return photos
}

export async function freezePhotos(): Promise<void> {
  const cwd = path.resolve(appRoot.toString(), "photos")
  const photos = await glob("**/*.(jpg|jpeg)", { cwd }).then(photos =>
    photos.map(p => path.resolve(cwd, p))
  )
  for (const filename of photos) {
    const photoPath = path.relative(cwd, filename)
    const hash = await md5file(filename)
    const [photoFilename, photoExt] = path.basename(photoPath).split(".")
    const hashedPhotoPath = path.join(
      path.dirname(photoPath),
      `${photoFilename}-${hash}.${photoExt}`
    )
    const mdFilename = replaceExt(filename, ".md")
    const { content, data } = grayMatter(
      await fs.readFile(mdFilename, { encoding: "utf-8" })
    )
    const description =
      content.trim().length === 0 ? undefined : sanitizeHTML(marked(content))
    const {
      pixelsPerSecond,
      elapsedTime,
      userTime,
      ...convertMetadata
    } = JSON.parse((await exec(`convert ${filename} json:`)).stdout)[0].image
    const metadata = PhotoMetadata.check(convertMetadata)

    const aspectRatio = metadata.geometry.width / metadata.geometry.height
    const photo = Photo.check({
      path: photoPath,
      hashedPhotoPath,
      hash,
      ...data,
      description,
      aspectRatio,
      metadata,
    })
    await fs.writeFile(
      replaceExt(filename, ".json"),
      JSON.stringify(photo, null, 2)
    )
  }
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createContentDigest,
}: SourceNodesArgs) => {
  const { createNode } = actions

  await freezePhotos()

  const allAlbums = await findAlbums()
  const allPhotos: { [key: string]: Photo & { albums: string[] } } = {}

  for (const albumPath of allAlbums) {
    const { photos, ...album } = await loadAlbum(albumPath)

    const albumContentString = JSON.stringify(album)
    const albumMeta = {
      id: album.path,
      photos___NODE: photos.map(({ hash }) => hash),
      internal: {
        type: "album",
        content: albumContentString,
        contentDigest: createContentDigest(albumContentString),
      },
    }
    createNode({ ...album, ...albumMeta })
    for (const photo of photos) {
      if (!(photo.hash in allPhotos)) {
        allPhotos[photo.hash] = { ...photo, albums: [] }
      }
      allPhotos[photo.hash].albums.push(album.path)
    }
  }

  for (const { albums, ...photo } of Object.values(allPhotos)) {
    const photoContentString = JSON.stringify(photo)
    const photoMeta = {
      id: photo.hash,
      albums___NODE: albums,
      internal: {
        type: "photo",
        content: photoContentString,
        contentDigest: createContentDigest(photoContentString),
      },
    }
    createNode({ ...photo, ...photoMeta })
  }
}
