export type ChildrenType = React.ReactNode

export interface StackInterface {
  id: number
  name: string
  startIndex: number
  endIndex: number
}

export interface LanguageInterface {
  id: string
  name: string
}

declare global {
  interface Window {
    email: () => string
    linkedin: () => string
    github: () => string
  }
}
