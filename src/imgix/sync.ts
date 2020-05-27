import appRoot from "app-root-path"
import glob from "fast-glob"
import md5file from "md5-file"
import path from "path"
import cpFile from "cp-file"
import { promises as fs } from "fs"

export const sync = async () => {
  const source = path.resolve(appRoot.toString(), "photos")
  const destination = path.resolve(appRoot.toString(), ".dropbox/imgix")
  await fs.mkdir(destination, { recursive: true })

  const photos = await glob("**/*.(jpg|jpeg)", { cwd: source })
  for (const photo of photos) {
    const sourceName = path.resolve(source, photo)
    const hash = await md5file(sourceName)
    const [name, ext] = path.basename(photo).split(".")
    const hashedFilename = path.join(path.dirname(photo), `${name}-${hash}.${ext}`)
    const destinationName = path.resolve(destination, hashedFilename)
    await fs.mkdir(path.dirname(destinationName), { recursive: true })
    await cpFile(sourceName, destinationName)
  }
}
if (require.main === module) {
  Promise.resolve().then(async () => {
    await sync()
  })
}
