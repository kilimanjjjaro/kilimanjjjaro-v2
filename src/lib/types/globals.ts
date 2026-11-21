import type { StackId } from '@/lib/constants/skills'

export type ChildrenType = React.ReactNode

export interface StackBaseInterface {
  id: StackId
  name: string
}

export interface StackInterface extends StackBaseInterface {
  startIndex: number
  endIndex: number
}

export type Locale = 'en' | 'es'

export interface LanguageInterface {
  id: Locale
  name: string
}

declare global {
  interface Window {
    kili_email: () => string
    kili_linkedin: () => string
    kili_github: () => string
  }
}
