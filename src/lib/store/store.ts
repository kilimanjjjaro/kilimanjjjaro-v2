import { create } from 'zustand'
import updateStacks from '@/lib/utils/updateStacks'
import type { StoreInterface } from '@/lib/interfaces/store'

const updatedStacks = updateStacks()

export const useStore = create<StoreInterface>((set) => ({
  navBarStatus: false,
  setNavBarStatus: (navBarStatus) => set(() => ({ navBarStatus })),
  navBarVersion: 0,
  setNavBarVersion: (navBarVersion) => set(() => ({ navBarVersion })),
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
