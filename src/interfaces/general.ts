export interface StoreInterface {
  navBarStatus: boolean
  setNavBarStatus: (navBarStatus: boolean) => void
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (selectedStack: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
  selectedLanguage: LanguageInterface
  setSelectedLanguage: (selectedLanguage: LanguageInterface) => void
  introRunning: boolean
  setIntroRunning: (introRunning: boolean) => void
}

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
  description: string
  stacks: string
  role: string
  images: {
    background: string
    poster: string
  }
  featured: boolean
  backgroundColor?: string
  year: string
}
