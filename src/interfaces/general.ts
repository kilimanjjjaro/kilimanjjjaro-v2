export interface ChildrenInterface {
  children: React.ReactNode
}

export interface StackInterface {
  id: number
  name: string
  startIndex: number
  endIndex: number
}

export interface SkillInterface {
  id: number
  name: string
  svg: string
  stackId: number
}

export interface LanguageInterface {
  id: string
  name: string
}

export interface ProjectInterface {
  id: number
  name: string
  role: string
  images: {
    background: string
    poster: string
  }
}
