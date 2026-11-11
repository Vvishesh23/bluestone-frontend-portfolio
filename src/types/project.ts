export type ImageAsset = {
  name: string
  width: number
  height: number
  alt: string
  caption: string
}

export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  stack: string
  features: string[]
  links: { label: string; href: string }[]
  image?: ImageAsset
  gallery?: ImageAsset[]
  sections: { title: string; body: string }[]
}
