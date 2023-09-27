import { create } from 'zustand'
import updateStacks from '@/lib/utils/updateStacks'
import { LANGUAGES } from '@/lib/constants/general'
import type { StoreInterface } from '@/lib/interfaces/general'

const updatedStacks = updateStacks()

export const useStore = create<StoreInterface>((set) => ({
  navBarStatus: false,
  setNavBarStatus: (navBarStatus) => set(() => ({ navBarStatus })),
  stacks: updatedStacks,
  selectedStack: updatedStacks[0],
  setSelectedStack: (selectedStack) => set(() => ({ selectedStack })),
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) =>
    set(() => ({ shouldMoveToStart })),
  selectedLanguage: LANGUAGES[0],
  setSelectedLanguage: (selectedLanguage) => set(() => ({ selectedLanguage })),
  cursorStatus: 'default',
  setCursorStatus: (cursorStatus) => set(() => ({ cursorStatus })),
  swiperInstance: null,
  setSwiperInstance: (swiperInstance) => set(() => ({ swiperInstance })),
  showContactForm: false,
  setShowContactForm: (showContactForm) => set(() => ({ showContactForm })),
  introRunning: true,
  setIntroRunning: (introRunning) => set(() => ({ introRunning }))
}))
