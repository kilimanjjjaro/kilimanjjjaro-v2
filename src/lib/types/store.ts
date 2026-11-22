import type { Swiper } from 'swiper'
import type { StackInterface } from '@/lib/types/globals'
import type { NavbarVersion } from '@/lib/constants/navbar'
import type { CursorStatus } from '@/lib/constants/cursor'

export interface GlobalsSliceInterface {
  cursorStatus: CursorStatus
  setCursorStatus: (cursorStatus: CursorStatus) => void
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
  navbarVersion: NavbarVersion
  setNavbarVersion: (navbarVersion: NavbarVersion) => void
}

export interface SkillsSliceInterface {
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (selectedStack: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
}

export interface StoreInterface
  extends GlobalsSliceInterface, NavbarSliceInterface, SkillsSliceInterface {}
