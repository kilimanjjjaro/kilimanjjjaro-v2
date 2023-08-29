import { CURSOR_STATUS } from '@/constants/general'
import type { Swiper } from 'swiper'

export type ChildrenType = React.ReactNode

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
  cursorStatus: (typeof CURSOR_STATUS)[keyof typeof CURSOR_STATUS]
  setCursorStatus: (
    cursorStatus: (typeof CURSOR_STATUS)[keyof typeof CURSOR_STATUS]
  ) => void
  swiperInstance: Swiper | null
  setSwiperInstance: (swiperInstance: Swiper) => void
  showContactForm: boolean
  setShowContactForm: (showContactForm: boolean) => void
  introRunning: boolean
  setIntroRunning: (introRunning: boolean) => void
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
