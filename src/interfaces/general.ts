import { CURSOR_STATUS } from '@/constants/general'
import type { Swiper } from 'swiper'

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
  cursorStatus: (typeof CURSOR_STATUS)[keyof typeof CURSOR_STATUS]
  setCursorStatus: (
    cursorStatus: (typeof CURSOR_STATUS)[keyof typeof CURSOR_STATUS]
  ) => void
  swiperInstance: Swiper | null
  setSwiperInstance: (swiperInstance: Swiper) => void
}

export type ChildrenType = React.ReactNode

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
  backgroundColor: string
  year: string
}
