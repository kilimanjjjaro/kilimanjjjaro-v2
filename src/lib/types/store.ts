import type { Swiper } from 'swiper'
import type { StackInterface } from '@/lib/types/general'

export interface NavbarSliceInterface {
  navbarStatus: boolean
  setNavbarStatus: (navbarStatus: boolean) => void
  navbarVersion: number
  setNavbarVersion: (navbarVersion: number) => void
}

export interface GeneralSliceInterface {
  swiperInstance: Swiper | null
  setSwiperInstance: (swiperInstance: Swiper) => void
  showContactForm: boolean
  setShowContactForm: (showContactForm: boolean) => void
  introRunning: boolean
  setIntroRunning: (introRunning: boolean) => void
}

export interface SkillsSliceInterface {
  selectedStack: StackInterface
  setSelectedStack: (selectedStack: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
}

export interface MagicKeysSliceInterface {
  successCombination: boolean
  setSuccessCombination: (successCombination: boolean) => void
}

export interface StoreInterface
  extends GeneralSliceInterface,
    NavbarSliceInterface,
    SkillsSliceInterface,
    MagicKeysSliceInterface {}
