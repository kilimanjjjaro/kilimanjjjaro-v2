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
    kili_email: () => string
    kili_linkedin: () => string
    kili_github: () => string
  }
}
