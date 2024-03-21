import type { Swiper } from 'swiper'
import type { StackInterface } from '@/lib/types/globals'

export interface GlobalsSliceInterface {
  cursorStatus: string
  setCursorStatus: (cursorStatus: string) => void
  swiperInstance: Swiper | null
  setSwiperInstance: (swiperInstance: Swiper) => void
  showContactForm: boolean
  setShowContactForm: (showContactForm: boolean) => void
  introRunning: boolean
  setIntroRunning: (introRunning: boolean) => void
}

export interface NavbarSliceInterface {
  navbarStatus: boolean
  setNavbarStatus: (navbarStatus: boolean) => void
  navbarVersion: number
  setNavbarVersion: (navbarVersion: number) => void
}

export interface SkillsSliceInterface {
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (selectedStack: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
}

export interface StoreInterface
  extends GlobalsSliceInterface,
    NavbarSliceInterface,
    SkillsSliceInterface {}
