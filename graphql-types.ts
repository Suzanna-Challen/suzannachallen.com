export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type Album = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  photos?: Maybe<Array<Maybe<Photo>>>
}

export type AlbumConnection = {
  totalCount: Scalars["Int"]
  edges: Array<AlbumEdge>
  nodes: Array<Album>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<AlbumGroupConnection>
}

export type AlbumConnectionDistinctArgs = {
  field: AlbumFieldsEnum
}

export type AlbumConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: AlbumFieldsEnum
}

export type AlbumEdge = {
  next?: Maybe<Album>
  node: Album
  previous?: Maybe<Album>
}

export type AlbumFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "title"
  | "path"
  | "description"
  | "photos"
  | "photos___id"
  | "photos___parent___id"
  | "photos___parent___parent___id"
  | "photos___parent___parent___children"
  | "photos___parent___children"
  | "photos___parent___children___id"
  | "photos___parent___children___children"
  | "photos___parent___internal___content"
  | "photos___parent___internal___contentDigest"
  | "photos___parent___internal___description"
  | "photos___parent___internal___fieldOwners"
  | "photos___parent___internal___ignoreType"
  | "photos___parent___internal___mediaType"
  | "photos___parent___internal___owner"
  | "photos___parent___internal___type"
  | "photos___children"
  | "photos___children___id"
  | "photos___children___parent___id"
  | "photos___children___parent___children"
  | "photos___children___children"
  | "photos___children___children___id"
  | "photos___children___children___children"
  | "photos___children___internal___content"
  | "photos___children___internal___contentDigest"
  | "photos___children___internal___description"
  | "photos___children___internal___fieldOwners"
  | "photos___children___internal___ignoreType"
  | "photos___children___internal___mediaType"
  | "photos___children___internal___owner"
  | "photos___children___internal___type"
  | "photos___internal___content"
  | "photos___internal___contentDigest"
  | "photos___internal___description"
  | "photos___internal___fieldOwners"
  | "photos___internal___ignoreType"
  | "photos___internal___mediaType"
  | "photos___internal___owner"
  | "photos___internal___type"
  | "photos___path"
  | "photos___hashedPhotoPath"
  | "photos___hash"
  | "photos___title"
  | "photos___date"
  | "photos___process"
  | "photos___aspectRatio"
  | "photos___metadata___name"
  | "photos___metadata___format"
  | "photos___metadata___formatDescription"
  | "photos___metadata___mimeType"
  | "photos___metadata___class"
  | "photos___metadata___geometry___width"
  | "photos___metadata___geometry___height"
  | "photos___metadata___geometry___x"
  | "photos___metadata___geometry___y"
  | "photos___metadata___resolution___x"
  | "photos___metadata___resolution___y"
  | "photos___metadata___printSize___x"
  | "photos___metadata___printSize___y"
  | "photos___metadata___units"
  | "photos___metadata___type"
  | "photos___metadata___endianness"
  | "photos___metadata___colorspace"
  | "photos___metadata___depth"
  | "photos___metadata___baseDepth"
  | "photos___metadata___channelDepth___red"
  | "photos___metadata___channelDepth___green"
  | "photos___metadata___channelDepth___blue"
  | "photos___metadata___pixels"
  | "photos___metadata___renderingIntent"
  | "photos___metadata___gamma"
  | "photos___metadata___backgroundColor"
  | "photos___metadata___borderColor"
  | "photos___metadata___matteColor"
  | "photos___metadata___transparentColor"
  | "photos___metadata___interlace"
  | "photos___metadata___intensity"
  | "photos___metadata___compose"
  | "photos___metadata___pageGeometry___width"
  | "photos___metadata___pageGeometry___height"
  | "photos___metadata___pageGeometry___x"
  | "photos___metadata___pageGeometry___y"
  | "photos___metadata___dispose"
  | "photos___metadata___iterations"
  | "photos___metadata___compression"
  | "photos___metadata___quality"
  | "photos___metadata___orientation"
  | "photos___metadata___properties___date_create"
  | "photos___metadata___properties___date_modify"
  | "photos___metadata___properties___exif_Copyright"
  | "photos___metadata___properties___icc_copyright"
  | "photos___metadata___properties___icc_description"
  | "photos___metadata___properties___icc_manufacturer"
  | "photos___metadata___properties___icc_model"
  | "photos___metadata___properties___jpeg_colorspace"
  | "photos___metadata___properties___jpeg_sampling_factor"
  | "photos___metadata___properties___signature"
  | "photos___metadata___properties___exif_ApertureValue"
  | "photos___metadata___properties___exif_BodySerialNumber"
  | "photos___metadata___properties___exif_CFAPattern"
  | "photos___metadata___properties___exif_Contrast"
  | "photos___metadata___properties___exif_CustomRendered"
  | "photos___metadata___properties___exif_DateTime"
  | "photos___metadata___properties___exif_DateTimeDigitized"
  | "photos___metadata___properties___exif_DateTimeOriginal"
  | "photos___metadata___properties___exif_DigitalZoomRatio"
  | "photos___metadata___properties___exif_ExifOffset"
  | "photos___metadata___properties___exif_ExifVersion"
  | "photos___metadata___properties___exif_ExposureBiasValue"
  | "photos___metadata___properties___exif_ExposureMode"
  | "photos___metadata___properties___exif_ExposureProgram"
  | "photos___metadata___properties___exif_ExposureTime"
  | "photos___metadata___properties___exif_FileSource"
  | "photos___metadata___properties___exif_Flash"
  | "photos___metadata___properties___exif_FNumber"
  | "photos___metadata___properties___exif_FocalLength"
  | "photos___metadata___properties___exif_FocalLengthIn35mmFilm"
  | "photos___metadata___properties___exif_FocalPlaneResolutionUnit"
  | "photos___metadata___properties___exif_FocalPlaneXResolution"
  | "photos___metadata___properties___exif_FocalPlaneYResolution"
  | "photos___metadata___properties___exif_GainControl"
  | "photos___metadata___properties___exif_LensModel"
  | "photos___metadata___properties___exif_LensSpecification"
  | "photos___metadata___properties___exif_LightSource"
  | "photos___metadata___properties___exif_Make"
  | "photos___metadata___properties___exif_MaxApertureValue"
  | "photos___metadata___properties___exif_MeteringMode"
  | "photos___metadata___properties___exif_Model"
  | "photos___metadata___properties___exif_PhotographicSensitivity"
  | "photos___metadata___properties___exif_Saturation"
  | "photos___metadata___properties___exif_SceneCaptureType"
  | "photos___metadata___properties___exif_SceneType"
  | "photos___metadata___properties___exif_SensingMethod"
  | "photos___metadata___properties___exif_SensitivityType"
  | "photos___metadata___properties___exif_Sharpness"
  | "photos___metadata___properties___exif_ShutterSpeedValue"
  | "photos___metadata___properties___exif_Software"
  | "photos___metadata___properties___exif_SubjectDistanceRange"
  | "photos___metadata___properties___exif_SubSecTimeDigitized"
  | "photos___metadata___properties___exif_SubSecTimeOriginal"
  | "photos___metadata___properties___exif_thumbnail_Compression"
  | "photos___metadata___properties___exif_thumbnail_JPEGInterchangeFormat"
  | "photos___metadata___properties___exif_thumbnail_JPEGInterchangeFormatLength"
  | "photos___metadata___properties___exif_thumbnail_ResolutionUnit"
  | "photos___metadata___properties___exif_thumbnail_XResolution"
  | "photos___metadata___properties___exif_thumbnail_YResolution"
  | "photos___metadata___properties___exif_WhiteBalance"
  | "photos___metadata___artifacts___filename"
  | "photos___metadata___tainted"
  | "photos___metadata___filesize"
  | "photos___metadata___numberPixels"
  | "photos___metadata___version"
  | "photos___albums"
  | "photos___albums___id"
  | "photos___albums___parent___id"
  | "photos___albums___parent___children"
  | "photos___albums___children"
  | "photos___albums___children___id"
  | "photos___albums___children___children"
  | "photos___albums___internal___content"
  | "photos___albums___internal___contentDigest"
  | "photos___albums___internal___description"
  | "photos___albums___internal___fieldOwners"
  | "photos___albums___internal___ignoreType"
  | "photos___albums___internal___mediaType"
  | "photos___albums___internal___owner"
  | "photos___albums___internal___type"
  | "photos___albums___title"
  | "photos___albums___path"
  | "photos___albums___description"
  | "photos___albums___photos"
  | "photos___albums___photos___id"
  | "photos___albums___photos___children"
  | "photos___albums___photos___path"
  | "photos___albums___photos___hashedPhotoPath"
  | "photos___albums___photos___hash"
  | "photos___albums___photos___title"
  | "photos___albums___photos___date"
  | "photos___albums___photos___process"
  | "photos___albums___photos___aspectRatio"
  | "photos___albums___photos___albums"

export type AlbumFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  photos?: Maybe<PhotoFilterListInput>
}

export type AlbumFilterListInput = {
  elemMatch?: Maybe<AlbumFilterInput>
}

export type AlbumGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<AlbumEdge>
  nodes: Array<Album>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type AlbumSortInput = {
  fields?: Maybe<Array<Maybe<AlbumFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>
  ne?: Maybe<Scalars["Boolean"]>
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>
  ne?: Maybe<Scalars["Date"]>
  gt?: Maybe<Scalars["Date"]>
  gte?: Maybe<Scalars["Date"]>
  lt?: Maybe<Scalars["Date"]>
  lte?: Maybe<Scalars["Date"]>
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>
  ne?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export type Internal = {
  content?: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType?: Maybe<Scalars["Boolean"]>
  mediaType?: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>
  ne?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

/** Node Interface */
export type Node = {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars["Int"]
  hasPreviousPage: Scalars["Boolean"]
  hasNextPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage?: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

export type Photo = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  path?: Maybe<Scalars["String"]>
  hashedPhotoPath?: Maybe<Scalars["String"]>
  hash?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  process?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  metadata?: Maybe<PhotoMetadata>
  albums?: Maybe<Array<Maybe<Album>>>
}

export type PhotoConnection = {
  totalCount: Scalars["Int"]
  edges: Array<PhotoEdge>
  nodes: Array<Photo>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<PhotoGroupConnection>
}

export type PhotoConnectionDistinctArgs = {
  field: PhotoFieldsEnum
}

export type PhotoConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: PhotoFieldsEnum
}

export type PhotoEdge = {
  next?: Maybe<Photo>
  node: Photo
  previous?: Maybe<Photo>
}

export type PhotoFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "path"
  | "hashedPhotoPath"
  | "hash"
  | "title"
  | "date"
  | "process"
  | "aspectRatio"
  | "metadata___name"
  | "metadata___format"
  | "metadata___formatDescription"
  | "metadata___mimeType"
  | "metadata___class"
  | "metadata___geometry___width"
  | "metadata___geometry___height"
  | "metadata___geometry___x"
  | "metadata___geometry___y"
  | "metadata___resolution___x"
  | "metadata___resolution___y"
  | "metadata___printSize___x"
  | "metadata___printSize___y"
  | "metadata___units"
  | "metadata___type"
  | "metadata___endianness"
  | "metadata___colorspace"
  | "metadata___depth"
  | "metadata___baseDepth"
  | "metadata___channelDepth___red"
  | "metadata___channelDepth___green"
  | "metadata___channelDepth___blue"
  | "metadata___pixels"
  | "metadata___imageStatistics___all___min"
  | "metadata___imageStatistics___all___max"
  | "metadata___imageStatistics___all___mean"
  | "metadata___imageStatistics___all___standardDeviation"
  | "metadata___imageStatistics___all___kurtosis"
  | "metadata___imageStatistics___all___skewness"
  | "metadata___imageStatistics___all___entropy"
  | "metadata___channelStatistics___red___min"
  | "metadata___channelStatistics___red___max"
  | "metadata___channelStatistics___red___mean"
  | "metadata___channelStatistics___red___standardDeviation"
  | "metadata___channelStatistics___red___kurtosis"
  | "metadata___channelStatistics___red___skewness"
  | "metadata___channelStatistics___red___entropy"
  | "metadata___channelStatistics___green___min"
  | "metadata___channelStatistics___green___max"
  | "metadata___channelStatistics___green___mean"
  | "metadata___channelStatistics___green___standardDeviation"
  | "metadata___channelStatistics___green___kurtosis"
  | "metadata___channelStatistics___green___skewness"
  | "metadata___channelStatistics___green___entropy"
  | "metadata___channelStatistics___blue___min"
  | "metadata___channelStatistics___blue___max"
  | "metadata___channelStatistics___blue___mean"
  | "metadata___channelStatistics___blue___standardDeviation"
  | "metadata___channelStatistics___blue___kurtosis"
  | "metadata___channelStatistics___blue___skewness"
  | "metadata___channelStatistics___blue___entropy"
  | "metadata___renderingIntent"
  | "metadata___gamma"
  | "metadata___chromaticity___redPrimary___x"
  | "metadata___chromaticity___redPrimary___y"
  | "metadata___chromaticity___greenPrimary___x"
  | "metadata___chromaticity___greenPrimary___y"
  | "metadata___chromaticity___bluePrimary___x"
  | "metadata___chromaticity___bluePrimary___y"
  | "metadata___chromaticity___whitePrimary___x"
  | "metadata___chromaticity___whitePrimary___y"
  | "metadata___backgroundColor"
  | "metadata___borderColor"
  | "metadata___matteColor"
  | "metadata___transparentColor"
  | "metadata___interlace"
  | "metadata___intensity"
  | "metadata___compose"
  | "metadata___pageGeometry___width"
  | "metadata___pageGeometry___height"
  | "metadata___pageGeometry___x"
  | "metadata___pageGeometry___y"
  | "metadata___dispose"
  | "metadata___iterations"
  | "metadata___compression"
  | "metadata___quality"
  | "metadata___orientation"
  | "metadata___properties___date_create"
  | "metadata___properties___date_modify"
  | "metadata___properties___exif_Copyright"
  | "metadata___properties___icc_copyright"
  | "metadata___properties___icc_description"
  | "metadata___properties___icc_manufacturer"
  | "metadata___properties___icc_model"
  | "metadata___properties___jpeg_colorspace"
  | "metadata___properties___jpeg_sampling_factor"
  | "metadata___properties___signature"
  | "metadata___properties___exif_ApertureValue"
  | "metadata___properties___exif_BodySerialNumber"
  | "metadata___properties___exif_CFAPattern"
  | "metadata___properties___exif_Contrast"
  | "metadata___properties___exif_CustomRendered"
  | "metadata___properties___exif_DateTime"
  | "metadata___properties___exif_DateTimeDigitized"
  | "metadata___properties___exif_DateTimeOriginal"
  | "metadata___properties___exif_DigitalZoomRatio"
  | "metadata___properties___exif_ExifOffset"
  | "metadata___properties___exif_ExifVersion"
  | "metadata___properties___exif_ExposureBiasValue"
  | "metadata___properties___exif_ExposureMode"
  | "metadata___properties___exif_ExposureProgram"
  | "metadata___properties___exif_ExposureTime"
  | "metadata___properties___exif_FileSource"
  | "metadata___properties___exif_Flash"
  | "metadata___properties___exif_FNumber"
  | "metadata___properties___exif_FocalLength"
  | "metadata___properties___exif_FocalLengthIn35mmFilm"
  | "metadata___properties___exif_FocalPlaneResolutionUnit"
  | "metadata___properties___exif_FocalPlaneXResolution"
  | "metadata___properties___exif_FocalPlaneYResolution"
  | "metadata___properties___exif_GainControl"
  | "metadata___properties___exif_LensModel"
  | "metadata___properties___exif_LensSpecification"
  | "metadata___properties___exif_LightSource"
  | "metadata___properties___exif_Make"
  | "metadata___properties___exif_MaxApertureValue"
  | "metadata___properties___exif_MeteringMode"
  | "metadata___properties___exif_Model"
  | "metadata___properties___exif_PhotographicSensitivity"
  | "metadata___properties___exif_Saturation"
  | "metadata___properties___exif_SceneCaptureType"
  | "metadata___properties___exif_SceneType"
  | "metadata___properties___exif_SensingMethod"
  | "metadata___properties___exif_SensitivityType"
  | "metadata___properties___exif_Sharpness"
  | "metadata___properties___exif_ShutterSpeedValue"
  | "metadata___properties___exif_Software"
  | "metadata___properties___exif_SubjectDistanceRange"
  | "metadata___properties___exif_SubSecTimeDigitized"
  | "metadata___properties___exif_SubSecTimeOriginal"
  | "metadata___properties___exif_thumbnail_Compression"
  | "metadata___properties___exif_thumbnail_JPEGInterchangeFormat"
  | "metadata___properties___exif_thumbnail_JPEGInterchangeFormatLength"
  | "metadata___properties___exif_thumbnail_ResolutionUnit"
  | "metadata___properties___exif_thumbnail_XResolution"
  | "metadata___properties___exif_thumbnail_YResolution"
  | "metadata___properties___exif_WhiteBalance"
  | "metadata___profiles____8bim___length"
  | "metadata___profiles___exif___length"
  | "metadata___profiles___icc___length"
  | "metadata___profiles___iptc___City_1_90_"
  | "metadata___profiles___iptc___Copyright_String_2_116_"
  | "metadata___profiles___iptc___length"
  | "metadata___profiles___iptc___Keyword_2_25_"
  | "metadata___profiles___iptc___Created_Date_2_55_"
  | "metadata___profiles___iptc___Created_Time_2_60_"
  | "metadata___profiles___iptc___Unknown_2_62_"
  | "metadata___profiles___iptc___Unknown_2_63_"
  | "metadata___profiles___xmp___length"
  | "metadata___artifacts___filename"
  | "metadata___tainted"
  | "metadata___filesize"
  | "metadata___numberPixels"
  | "metadata___version"
  | "albums"
  | "albums___id"
  | "albums___parent___id"
  | "albums___parent___parent___id"
  | "albums___parent___parent___children"
  | "albums___parent___children"
  | "albums___parent___children___id"
  | "albums___parent___children___children"
  | "albums___parent___internal___content"
  | "albums___parent___internal___contentDigest"
  | "albums___parent___internal___description"
  | "albums___parent___internal___fieldOwners"
  | "albums___parent___internal___ignoreType"
  | "albums___parent___internal___mediaType"
  | "albums___parent___internal___owner"
  | "albums___parent___internal___type"
  | "albums___children"
  | "albums___children___id"
  | "albums___children___parent___id"
  | "albums___children___parent___children"
  | "albums___children___children"
  | "albums___children___children___id"
  | "albums___children___children___children"
  | "albums___children___internal___content"
  | "albums___children___internal___contentDigest"
  | "albums___children___internal___description"
  | "albums___children___internal___fieldOwners"
  | "albums___children___internal___ignoreType"
  | "albums___children___internal___mediaType"
  | "albums___children___internal___owner"
  | "albums___children___internal___type"
  | "albums___internal___content"
  | "albums___internal___contentDigest"
  | "albums___internal___description"
  | "albums___internal___fieldOwners"
  | "albums___internal___ignoreType"
  | "albums___internal___mediaType"
  | "albums___internal___owner"
  | "albums___internal___type"
  | "albums___title"
  | "albums___path"
  | "albums___description"
  | "albums___photos"
  | "albums___photos___id"
  | "albums___photos___parent___id"
  | "albums___photos___parent___children"
  | "albums___photos___children"
  | "albums___photos___children___id"
  | "albums___photos___children___children"
  | "albums___photos___internal___content"
  | "albums___photos___internal___contentDigest"
  | "albums___photos___internal___description"
  | "albums___photos___internal___fieldOwners"
  | "albums___photos___internal___ignoreType"
  | "albums___photos___internal___mediaType"
  | "albums___photos___internal___owner"
  | "albums___photos___internal___type"
  | "albums___photos___path"
  | "albums___photos___hashedPhotoPath"
  | "albums___photos___hash"
  | "albums___photos___title"
  | "albums___photos___date"
  | "albums___photos___process"
  | "albums___photos___aspectRatio"
  | "albums___photos___metadata___name"
  | "albums___photos___metadata___format"
  | "albums___photos___metadata___formatDescription"
  | "albums___photos___metadata___mimeType"
  | "albums___photos___metadata___class"
  | "albums___photos___metadata___units"
  | "albums___photos___metadata___type"
  | "albums___photos___metadata___endianness"
  | "albums___photos___metadata___colorspace"
  | "albums___photos___metadata___depth"
  | "albums___photos___metadata___baseDepth"
  | "albums___photos___metadata___pixels"
  | "albums___photos___metadata___renderingIntent"
  | "albums___photos___metadata___gamma"
  | "albums___photos___metadata___backgroundColor"
  | "albums___photos___metadata___borderColor"
  | "albums___photos___metadata___matteColor"
  | "albums___photos___metadata___transparentColor"
  | "albums___photos___metadata___interlace"
  | "albums___photos___metadata___intensity"
  | "albums___photos___metadata___compose"
  | "albums___photos___metadata___dispose"
  | "albums___photos___metadata___iterations"
  | "albums___photos___metadata___compression"
  | "albums___photos___metadata___quality"
  | "albums___photos___metadata___orientation"
  | "albums___photos___metadata___tainted"
  | "albums___photos___metadata___filesize"
  | "albums___photos___metadata___numberPixels"
  | "albums___photos___metadata___version"
  | "albums___photos___albums"
  | "albums___photos___albums___id"
  | "albums___photos___albums___children"
  | "albums___photos___albums___title"
  | "albums___photos___albums___path"
  | "albums___photos___albums___description"
  | "albums___photos___albums___photos"

export type PhotoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  hashedPhotoPath?: Maybe<StringQueryOperatorInput>
  hash?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  date?: Maybe<StringQueryOperatorInput>
  process?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  metadata?: Maybe<PhotoMetadataFilterInput>
  albums?: Maybe<AlbumFilterListInput>
}

export type PhotoFilterListInput = {
  elemMatch?: Maybe<PhotoFilterInput>
}

export type PhotoGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<PhotoEdge>
  nodes: Array<Photo>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type PhotoMetadata = {
  name?: Maybe<Scalars["String"]>
  format?: Maybe<Scalars["String"]>
  formatDescription?: Maybe<Scalars["String"]>
  mimeType?: Maybe<Scalars["String"]>
  class?: Maybe<Scalars["String"]>
  geometry?: Maybe<PhotoMetadataGeometry>
  resolution?: Maybe<PhotoMetadataResolution>
  printSize?: Maybe<PhotoMetadataPrintSize>
  units?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  endianness?: Maybe<Scalars["String"]>
  colorspace?: Maybe<Scalars["String"]>
  depth?: Maybe<Scalars["Int"]>
  baseDepth?: Maybe<Scalars["Int"]>
  channelDepth?: Maybe<PhotoMetadataChannelDepth>
  pixels?: Maybe<Scalars["Int"]>
  imageStatistics?: Maybe<PhotoMetadataImageStatistics>
  channelStatistics?: Maybe<PhotoMetadataChannelStatistics>
  renderingIntent?: Maybe<Scalars["String"]>
  gamma?: Maybe<Scalars["Float"]>
  chromaticity?: Maybe<PhotoMetadataChromaticity>
  backgroundColor?: Maybe<Scalars["String"]>
  borderColor?: Maybe<Scalars["String"]>
  matteColor?: Maybe<Scalars["String"]>
  transparentColor?: Maybe<Scalars["String"]>
  interlace?: Maybe<Scalars["String"]>
  intensity?: Maybe<Scalars["String"]>
  compose?: Maybe<Scalars["String"]>
  pageGeometry?: Maybe<PhotoMetadataPageGeometry>
  dispose?: Maybe<Scalars["String"]>
  iterations?: Maybe<Scalars["Int"]>
  compression?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
  orientation?: Maybe<Scalars["String"]>
  properties?: Maybe<PhotoMetadataProperties>
  profiles?: Maybe<PhotoMetadataProfiles>
  artifacts?: Maybe<PhotoMetadataArtifacts>
  tainted?: Maybe<Scalars["Boolean"]>
  filesize?: Maybe<Scalars["String"]>
  numberPixels?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type PhotoMetadataArtifacts = {
  filename?: Maybe<Scalars["String"]>
}

export type PhotoMetadataArtifactsFilterInput = {
  filename?: Maybe<StringQueryOperatorInput>
}

export type PhotoMetadataChannelDepth = {
  red?: Maybe<Scalars["Int"]>
  green?: Maybe<Scalars["Int"]>
  blue?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataChannelDepthFilterInput = {
  red?: Maybe<IntQueryOperatorInput>
  green?: Maybe<IntQueryOperatorInput>
  blue?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataChannelStatistics = {
  red?: Maybe<PhotoMetadataChannelStatisticsRed>
  green?: Maybe<PhotoMetadataChannelStatisticsGreen>
  blue?: Maybe<PhotoMetadataChannelStatisticsBlue>
}

export type PhotoMetadataChannelStatisticsBlue = {
  min?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  mean?: Maybe<Scalars["Float"]>
  standardDeviation?: Maybe<Scalars["Float"]>
  kurtosis?: Maybe<Scalars["Float"]>
  skewness?: Maybe<Scalars["Float"]>
  entropy?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChannelStatisticsBlueFilterInput = {
  min?: Maybe<IntQueryOperatorInput>
  max?: Maybe<IntQueryOperatorInput>
  mean?: Maybe<FloatQueryOperatorInput>
  standardDeviation?: Maybe<FloatQueryOperatorInput>
  kurtosis?: Maybe<FloatQueryOperatorInput>
  skewness?: Maybe<FloatQueryOperatorInput>
  entropy?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChannelStatisticsFilterInput = {
  red?: Maybe<PhotoMetadataChannelStatisticsRedFilterInput>
  green?: Maybe<PhotoMetadataChannelStatisticsGreenFilterInput>
  blue?: Maybe<PhotoMetadataChannelStatisticsBlueFilterInput>
}

export type PhotoMetadataChannelStatisticsGreen = {
  min?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  mean?: Maybe<Scalars["Float"]>
  standardDeviation?: Maybe<Scalars["Float"]>
  kurtosis?: Maybe<Scalars["Float"]>
  skewness?: Maybe<Scalars["Float"]>
  entropy?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChannelStatisticsGreenFilterInput = {
  min?: Maybe<IntQueryOperatorInput>
  max?: Maybe<IntQueryOperatorInput>
  mean?: Maybe<FloatQueryOperatorInput>
  standardDeviation?: Maybe<FloatQueryOperatorInput>
  kurtosis?: Maybe<FloatQueryOperatorInput>
  skewness?: Maybe<FloatQueryOperatorInput>
  entropy?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChannelStatisticsRed = {
  min?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  mean?: Maybe<Scalars["Float"]>
  standardDeviation?: Maybe<Scalars["Float"]>
  kurtosis?: Maybe<Scalars["Float"]>
  skewness?: Maybe<Scalars["Float"]>
  entropy?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChannelStatisticsRedFilterInput = {
  min?: Maybe<IntQueryOperatorInput>
  max?: Maybe<IntQueryOperatorInput>
  mean?: Maybe<FloatQueryOperatorInput>
  standardDeviation?: Maybe<FloatQueryOperatorInput>
  kurtosis?: Maybe<FloatQueryOperatorInput>
  skewness?: Maybe<FloatQueryOperatorInput>
  entropy?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChromaticity = {
  redPrimary?: Maybe<PhotoMetadataChromaticityRedPrimary>
  greenPrimary?: Maybe<PhotoMetadataChromaticityGreenPrimary>
  bluePrimary?: Maybe<PhotoMetadataChromaticityBluePrimary>
  whitePrimary?: Maybe<PhotoMetadataChromaticityWhitePrimary>
}

export type PhotoMetadataChromaticityBluePrimary = {
  x?: Maybe<Scalars["Float"]>
  y?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChromaticityBluePrimaryFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChromaticityFilterInput = {
  redPrimary?: Maybe<PhotoMetadataChromaticityRedPrimaryFilterInput>
  greenPrimary?: Maybe<PhotoMetadataChromaticityGreenPrimaryFilterInput>
  bluePrimary?: Maybe<PhotoMetadataChromaticityBluePrimaryFilterInput>
  whitePrimary?: Maybe<PhotoMetadataChromaticityWhitePrimaryFilterInput>
}

export type PhotoMetadataChromaticityGreenPrimary = {
  x?: Maybe<Scalars["Float"]>
  y?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChromaticityGreenPrimaryFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChromaticityRedPrimary = {
  x?: Maybe<Scalars["Float"]>
  y?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChromaticityRedPrimaryFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataChromaticityWhitePrimary = {
  x?: Maybe<Scalars["Float"]>
  y?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataChromaticityWhitePrimaryFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  format?: Maybe<StringQueryOperatorInput>
  formatDescription?: Maybe<StringQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  class?: Maybe<StringQueryOperatorInput>
  geometry?: Maybe<PhotoMetadataGeometryFilterInput>
  resolution?: Maybe<PhotoMetadataResolutionFilterInput>
  printSize?: Maybe<PhotoMetadataPrintSizeFilterInput>
  units?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  endianness?: Maybe<StringQueryOperatorInput>
  colorspace?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
  baseDepth?: Maybe<IntQueryOperatorInput>
  channelDepth?: Maybe<PhotoMetadataChannelDepthFilterInput>
  pixels?: Maybe<IntQueryOperatorInput>
  imageStatistics?: Maybe<PhotoMetadataImageStatisticsFilterInput>
  channelStatistics?: Maybe<PhotoMetadataChannelStatisticsFilterInput>
  renderingIntent?: Maybe<StringQueryOperatorInput>
  gamma?: Maybe<FloatQueryOperatorInput>
  chromaticity?: Maybe<PhotoMetadataChromaticityFilterInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  borderColor?: Maybe<StringQueryOperatorInput>
  matteColor?: Maybe<StringQueryOperatorInput>
  transparentColor?: Maybe<StringQueryOperatorInput>
  interlace?: Maybe<StringQueryOperatorInput>
  intensity?: Maybe<StringQueryOperatorInput>
  compose?: Maybe<StringQueryOperatorInput>
  pageGeometry?: Maybe<PhotoMetadataPageGeometryFilterInput>
  dispose?: Maybe<StringQueryOperatorInput>
  iterations?: Maybe<IntQueryOperatorInput>
  compression?: Maybe<StringQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  orientation?: Maybe<StringQueryOperatorInput>
  properties?: Maybe<PhotoMetadataPropertiesFilterInput>
  profiles?: Maybe<PhotoMetadataProfilesFilterInput>
  artifacts?: Maybe<PhotoMetadataArtifactsFilterInput>
  tainted?: Maybe<BooleanQueryOperatorInput>
  filesize?: Maybe<StringQueryOperatorInput>
  numberPixels?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type PhotoMetadataGeometry = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  x?: Maybe<Scalars["Int"]>
  y?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataGeometryFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  x?: Maybe<IntQueryOperatorInput>
  y?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataImageStatistics = {
  all?: Maybe<PhotoMetadataImageStatisticsAll>
}

export type PhotoMetadataImageStatisticsAll = {
  min?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  mean?: Maybe<Scalars["Float"]>
  standardDeviation?: Maybe<Scalars["Float"]>
  kurtosis?: Maybe<Scalars["Float"]>
  skewness?: Maybe<Scalars["Float"]>
  entropy?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataImageStatisticsAllFilterInput = {
  min?: Maybe<IntQueryOperatorInput>
  max?: Maybe<IntQueryOperatorInput>
  mean?: Maybe<FloatQueryOperatorInput>
  standardDeviation?: Maybe<FloatQueryOperatorInput>
  kurtosis?: Maybe<FloatQueryOperatorInput>
  skewness?: Maybe<FloatQueryOperatorInput>
  entropy?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataImageStatisticsFilterInput = {
  all?: Maybe<PhotoMetadataImageStatisticsAllFilterInput>
}

export type PhotoMetadataPageGeometry = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  x?: Maybe<Scalars["Int"]>
  y?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataPageGeometryFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  x?: Maybe<IntQueryOperatorInput>
  y?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataPrintSize = {
  x?: Maybe<Scalars["Float"]>
  y?: Maybe<Scalars["Float"]>
}

export type PhotoMetadataPrintSizeFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
}

export type PhotoMetadataProfiles = {
  _8bim?: Maybe<PhotoMetadataProfiles_8bim>
  exif?: Maybe<PhotoMetadataProfilesExif>
  icc?: Maybe<PhotoMetadataProfilesIcc>
  iptc?: Maybe<PhotoMetadataProfilesIptc>
  xmp?: Maybe<PhotoMetadataProfilesXmp>
}

export type PhotoMetadataProfiles_8bim = {
  length?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataProfiles_8bimFilterInput = {
  length?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataProfilesExif = {
  length?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataProfilesExifFilterInput = {
  length?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataProfilesFilterInput = {
  _8bim?: Maybe<PhotoMetadataProfiles_8bimFilterInput>
  exif?: Maybe<PhotoMetadataProfilesExifFilterInput>
  icc?: Maybe<PhotoMetadataProfilesIccFilterInput>
  iptc?: Maybe<PhotoMetadataProfilesIptcFilterInput>
  xmp?: Maybe<PhotoMetadataProfilesXmpFilterInput>
}

export type PhotoMetadataProfilesIcc = {
  length?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataProfilesIccFilterInput = {
  length?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataProfilesIptc = {
  City_1_90_?: Maybe<Array<Maybe<Scalars["String"]>>>
  Copyright_String_2_116_?: Maybe<Array<Maybe<Scalars["String"]>>>
  length?: Maybe<Scalars["Int"]>
  Keyword_2_25_?: Maybe<Array<Maybe<Scalars["String"]>>>
  Created_Date_2_55_?: Maybe<Array<Maybe<Scalars["Date"]>>>
  Created_Time_2_60_?: Maybe<Array<Maybe<Scalars["String"]>>>
  Unknown_2_62_?: Maybe<Array<Maybe<Scalars["Date"]>>>
  Unknown_2_63_?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type PhotoMetadataProfilesIptcCreated_Date_2_55_Args = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type PhotoMetadataProfilesIptcUnknown_2_62_Args = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type PhotoMetadataProfilesIptcFilterInput = {
  City_1_90_?: Maybe<StringQueryOperatorInput>
  Copyright_String_2_116_?: Maybe<StringQueryOperatorInput>
  length?: Maybe<IntQueryOperatorInput>
  Keyword_2_25_?: Maybe<StringQueryOperatorInput>
  Created_Date_2_55_?: Maybe<DateQueryOperatorInput>
  Created_Time_2_60_?: Maybe<StringQueryOperatorInput>
  Unknown_2_62_?: Maybe<DateQueryOperatorInput>
  Unknown_2_63_?: Maybe<StringQueryOperatorInput>
}

export type PhotoMetadataProfilesXmp = {
  length?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataProfilesXmpFilterInput = {
  length?: Maybe<IntQueryOperatorInput>
}

export type PhotoMetadataProperties = {
  date_create?: Maybe<Scalars["Date"]>
  date_modify?: Maybe<Scalars["Date"]>
  exif_Copyright?: Maybe<Scalars["String"]>
  icc_copyright?: Maybe<Scalars["String"]>
  icc_description?: Maybe<Scalars["String"]>
  icc_manufacturer?: Maybe<Scalars["String"]>
  icc_model?: Maybe<Scalars["String"]>
  jpeg_colorspace?: Maybe<Scalars["String"]>
  jpeg_sampling_factor?: Maybe<Scalars["String"]>
  signature?: Maybe<Scalars["String"]>
  exif_ApertureValue?: Maybe<Scalars["String"]>
  exif_BodySerialNumber?: Maybe<Scalars["String"]>
  exif_CFAPattern?: Maybe<Scalars["String"]>
  exif_Contrast?: Maybe<Scalars["String"]>
  exif_CustomRendered?: Maybe<Scalars["String"]>
  exif_DateTime?: Maybe<Scalars["String"]>
  exif_DateTimeDigitized?: Maybe<Scalars["String"]>
  exif_DateTimeOriginal?: Maybe<Scalars["String"]>
  exif_DigitalZoomRatio?: Maybe<Scalars["String"]>
  exif_ExifOffset?: Maybe<Scalars["String"]>
  exif_ExifVersion?: Maybe<Scalars["String"]>
  exif_ExposureBiasValue?: Maybe<Scalars["String"]>
  exif_ExposureMode?: Maybe<Scalars["String"]>
  exif_ExposureProgram?: Maybe<Scalars["String"]>
  exif_ExposureTime?: Maybe<Scalars["String"]>
  exif_FileSource?: Maybe<Scalars["String"]>
  exif_Flash?: Maybe<Scalars["String"]>
  exif_FNumber?: Maybe<Scalars["String"]>
  exif_FocalLength?: Maybe<Scalars["String"]>
  exif_FocalLengthIn35mmFilm?: Maybe<Scalars["String"]>
  exif_FocalPlaneResolutionUnit?: Maybe<Scalars["String"]>
  exif_FocalPlaneXResolution?: Maybe<Scalars["String"]>
  exif_FocalPlaneYResolution?: Maybe<Scalars["String"]>
  exif_GainControl?: Maybe<Scalars["String"]>
  exif_LensModel?: Maybe<Scalars["String"]>
  exif_LensSpecification?: Maybe<Scalars["String"]>
  exif_LightSource?: Maybe<Scalars["String"]>
  exif_Make?: Maybe<Scalars["String"]>
  exif_MaxApertureValue?: Maybe<Scalars["String"]>
  exif_MeteringMode?: Maybe<Scalars["String"]>
  exif_Model?: Maybe<Scalars["String"]>
  exif_PhotographicSensitivity?: Maybe<Scalars["String"]>
  exif_Saturation?: Maybe<Scalars["String"]>
  exif_SceneCaptureType?: Maybe<Scalars["String"]>
  exif_SceneType?: Maybe<Scalars["String"]>
  exif_SensingMethod?: Maybe<Scalars["String"]>
  exif_SensitivityType?: Maybe<Scalars["String"]>
  exif_Sharpness?: Maybe<Scalars["String"]>
  exif_ShutterSpeedValue?: Maybe<Scalars["String"]>
  exif_Software?: Maybe<Scalars["String"]>
  exif_SubjectDistanceRange?: Maybe<Scalars["String"]>
  exif_SubSecTimeDigitized?: Maybe<Scalars["String"]>
  exif_SubSecTimeOriginal?: Maybe<Scalars["String"]>
  exif_thumbnail_Compression?: Maybe<Scalars["String"]>
  exif_thumbnail_JPEGInterchangeFormat?: Maybe<Scalars["String"]>
  exif_thumbnail_JPEGInterchangeFormatLength?: Maybe<Scalars["String"]>
  exif_thumbnail_ResolutionUnit?: Maybe<Scalars["String"]>
  exif_thumbnail_XResolution?: Maybe<Scalars["String"]>
  exif_thumbnail_YResolution?: Maybe<Scalars["String"]>
  exif_WhiteBalance?: Maybe<Scalars["String"]>
}

export type PhotoMetadataPropertiesDate_CreateArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type PhotoMetadataPropertiesDate_ModifyArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type PhotoMetadataPropertiesFilterInput = {
  date_create?: Maybe<DateQueryOperatorInput>
  date_modify?: Maybe<DateQueryOperatorInput>
  exif_Copyright?: Maybe<StringQueryOperatorInput>
  icc_copyright?: Maybe<StringQueryOperatorInput>
  icc_description?: Maybe<StringQueryOperatorInput>
  icc_manufacturer?: Maybe<StringQueryOperatorInput>
  icc_model?: Maybe<StringQueryOperatorInput>
  jpeg_colorspace?: Maybe<StringQueryOperatorInput>
  jpeg_sampling_factor?: Maybe<StringQueryOperatorInput>
  signature?: Maybe<StringQueryOperatorInput>
  exif_ApertureValue?: Maybe<StringQueryOperatorInput>
  exif_BodySerialNumber?: Maybe<StringQueryOperatorInput>
  exif_CFAPattern?: Maybe<StringQueryOperatorInput>
  exif_Contrast?: Maybe<StringQueryOperatorInput>
  exif_CustomRendered?: Maybe<StringQueryOperatorInput>
  exif_DateTime?: Maybe<StringQueryOperatorInput>
  exif_DateTimeDigitized?: Maybe<StringQueryOperatorInput>
  exif_DateTimeOriginal?: Maybe<StringQueryOperatorInput>
  exif_DigitalZoomRatio?: Maybe<StringQueryOperatorInput>
  exif_ExifOffset?: Maybe<StringQueryOperatorInput>
  exif_ExifVersion?: Maybe<StringQueryOperatorInput>
  exif_ExposureBiasValue?: Maybe<StringQueryOperatorInput>
  exif_ExposureMode?: Maybe<StringQueryOperatorInput>
  exif_ExposureProgram?: Maybe<StringQueryOperatorInput>
  exif_ExposureTime?: Maybe<StringQueryOperatorInput>
  exif_FileSource?: Maybe<StringQueryOperatorInput>
  exif_Flash?: Maybe<StringQueryOperatorInput>
  exif_FNumber?: Maybe<StringQueryOperatorInput>
  exif_FocalLength?: Maybe<StringQueryOperatorInput>
  exif_FocalLengthIn35mmFilm?: Maybe<StringQueryOperatorInput>
  exif_FocalPlaneResolutionUnit?: Maybe<StringQueryOperatorInput>
  exif_FocalPlaneXResolution?: Maybe<StringQueryOperatorInput>
  exif_FocalPlaneYResolution?: Maybe<StringQueryOperatorInput>
  exif_GainControl?: Maybe<StringQueryOperatorInput>
  exif_LensModel?: Maybe<StringQueryOperatorInput>
  exif_LensSpecification?: Maybe<StringQueryOperatorInput>
  exif_LightSource?: Maybe<StringQueryOperatorInput>
  exif_Make?: Maybe<StringQueryOperatorInput>
  exif_MaxApertureValue?: Maybe<StringQueryOperatorInput>
  exif_MeteringMode?: Maybe<StringQueryOperatorInput>
  exif_Model?: Maybe<StringQueryOperatorInput>
  exif_PhotographicSensitivity?: Maybe<StringQueryOperatorInput>
  exif_Saturation?: Maybe<StringQueryOperatorInput>
  exif_SceneCaptureType?: Maybe<StringQueryOperatorInput>
  exif_SceneType?: Maybe<StringQueryOperatorInput>
  exif_SensingMethod?: Maybe<StringQueryOperatorInput>
  exif_SensitivityType?: Maybe<StringQueryOperatorInput>
  exif_Sharpness?: Maybe<StringQueryOperatorInput>
  exif_ShutterSpeedValue?: Maybe<StringQueryOperatorInput>
  exif_Software?: Maybe<StringQueryOperatorInput>
  exif_SubjectDistanceRange?: Maybe<StringQueryOperatorInput>
  exif_SubSecTimeDigitized?: Maybe<StringQueryOperatorInput>
  exif_SubSecTimeOriginal?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_Compression?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_JPEGInterchangeFormat?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_JPEGInterchangeFormatLength?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_ResolutionUnit?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_XResolution?: Maybe<StringQueryOperatorInput>
  exif_thumbnail_YResolution?: Maybe<StringQueryOperatorInput>
  exif_WhiteBalance?: Maybe<StringQueryOperatorInput>
}

export type PhotoMetadataResolution = {
  x?: Maybe<Scalars["Int"]>
  y?: Maybe<Scalars["Int"]>
}

export type PhotoMetadataResolutionFilterInput = {
  x?: Maybe<IntQueryOperatorInput>
  y?: Maybe<IntQueryOperatorInput>
}

export type PhotoSortInput = {
  fields?: Maybe<Array<Maybe<PhotoFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  photo?: Maybe<Photo>
  allPhoto: PhotoConnection
  album?: Maybe<Album>
  allAlbum: AlbumConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryPhotoArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  hashedPhotoPath?: Maybe<StringQueryOperatorInput>
  hash?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  date?: Maybe<StringQueryOperatorInput>
  process?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  metadata?: Maybe<PhotoMetadataFilterInput>
  albums?: Maybe<AlbumFilterListInput>
}

export type QueryAllPhotoArgs = {
  filter?: Maybe<PhotoFilterInput>
  sort?: Maybe<PhotoSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryAlbumArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  photos?: Maybe<PhotoFilterListInput>
}

export type QueryAllAlbumArgs = {
  filter?: Maybe<AlbumFilterInput>
  sort?: Maybe<AlbumSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars["Date"]>
  siteMetadata?: Maybe<SiteSiteMetadata>
  polyfill?: Maybe<Scalars["Boolean"]>
  pathPrefix?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars["Date"]>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime"

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePage = Node & {
  path: Scalars["String"]
  component: Scalars["String"]
  internalComponentName: Scalars["String"]
  componentChunkName: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars["String"]>
  componentPath?: Maybe<Scalars["String"]>
}

export type SitePageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___documentPaths"
  | "pluginCreator___pluginOptions___fonts"
  | "pluginCreator___pluginOptions___display"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___short_name"
  | "pluginCreator___pluginOptions___start_url"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "componentPath"

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath?: Maybe<Scalars["String"]>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___documentPaths"
  | "pluginOptions___fonts"
  | "pluginOptions___display"
  | "pluginOptions___name"
  | "pluginOptions___short_name"
  | "pluginOptions___start_url"
  | "pluginOptions___icon"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___include_favicon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___path"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords"

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  main?: Maybe<Scalars["String"]>
  license?: Maybe<Scalars["String"]>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  documentPaths?: Maybe<Array<Maybe<Scalars["String"]>>>
  fonts?: Maybe<Array<Maybe<Scalars["String"]>>>
  display?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  short_name?: Maybe<Scalars["String"]>
  start_url?: Maybe<Scalars["String"]>
  icon?: Maybe<Scalars["String"]>
  cache_busting_mode?: Maybe<Scalars["String"]>
  include_favicon?: Maybe<Scalars["Boolean"]>
  legacy?: Maybe<Scalars["Boolean"]>
  theme_color_in_head?: Maybe<Scalars["Boolean"]>
  cacheDigest?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  pathCheck?: Maybe<Scalars["Boolean"]>
}

export type SitePluginPluginOptionsFilterInput = {
  documentPaths?: Maybe<StringQueryOperatorInput>
  fonts?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = "ASC" | "DESC"

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  ne?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
}

export type IndexQueryVariables = {}

export type IndexQuery = { allPhoto: { edges: Array<{ node: Pick<Photo, "hash" | "hashedPhotoPath"> }> } }
