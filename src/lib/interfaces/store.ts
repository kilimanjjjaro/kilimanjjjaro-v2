import { CURSOR_STATUS } from '@/lib/constants/general'
import type { Swiper } from 'swiper'
import type { StackInterface } from '@/lib/interfaces/general'

export interface StoreInterface {
  navbarStatus: boolean
  setNavbarStatus: (navbarStatus: boolean) => void
  navbarVersion: number
  setNavbarVersion: (navbarVersion: number) => void
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (selectedStack: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
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
