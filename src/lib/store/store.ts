import { create } from 'zustand'
import updateStacks from '@/lib/utils/updateStacks'
import type { StoreInterface } from '@/lib/interfaces/store'

const updatedStacks = updateStacks()

export const useStore = create<StoreInterface>((set) => ({
  navbarStatus: false,
  setNavbarStatus: (navbarStatus) => set(() => ({ navbarStatus })),
  navbarVersion: 0,
  setNavbarVersion: (navbarVersion) => set(() => ({ navbarVersion })),
  stacks: updatedStacks,
  selectedStack: updatedStacks[0],
  setSelectedStack: (selectedStack) => set(() => ({ selectedStack })),
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) =>
    set(() => ({ shouldMoveToStart })),
  cursorStatus: 'default',
  setCursorStatus: (cursorStatus) => set(() => ({ cursorStatus })),
  swiperInstance: null,
  setSwiperInstance: (swiperInstance) => set(() => ({ swiperInstance })),
  showContactForm: false,
  setShowContactForm: (showContactForm) => set(() => ({ showContactForm })),
  introRunning: true,
  setIntroRunning: (introRunning) => set(() => ({ introRunning }))
}))
