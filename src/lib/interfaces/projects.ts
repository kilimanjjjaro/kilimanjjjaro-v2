export interface FeaturedProjectInterface {
  id: number
  name: string
  slug: string
  headerDescription: string
  sectionDescription: string
  stacks: string[]
  role: string
  presentation: {
    background: string
    poster: string
    video: string
  }
  backgroundColor: string
  year: string
  link: string
}

export interface OtherProjectInterface {
  id: number
  name: string
  image?: string
  link: string
  description: string
  stacks: string[]
  role: string
  year: string
}
