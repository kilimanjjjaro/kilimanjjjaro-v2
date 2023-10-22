export interface FeaturedProjectInterface {
  id: number
  name: string
  slug: string
  headerDescription: string
  sectionDescription: string
  keyword: string
  stacks: string[]
  role: string
  presentation: {
    background: string
    poster: string
    video: string
  }
  gallery: string[]
  backgroundColor: string
  year: string
  link: string
  metaImage: string
}

export interface OtherProjectInterface {
  id: number
  slug: string
  name: string
  image: string
  link: string
  description: string
  stacks: string[]
  role: string
  year: string
  isRepository: boolean
}

export interface FeaturedProjectsInterface {
  en: FeaturedProjectInterface[]
  es: FeaturedProjectInterface[]
}

export interface OtherProjectsInterface {
  en: OtherProjectInterface[]
  es: OtherProjectInterface[]
}
