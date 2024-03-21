import { StateCreator } from 'zustand'
import type { GlobalsSliceInterface } from '@/lib/types/store'

export const createGeneralSlice: StateCreator<GlobalsSliceInterface> = (
  set
) => ({
  cursorStatus: 'default',
  setCursorStatus: (cursorStatus) => set(() => ({ cursorStatus })),
  swiperInstance: null,
  setSwiperInstance: (swiperInstance) => set(() => ({ swiperInstance })),
  showContactForm: false,
  setShowContactForm: (showContactForm) => set(() => ({ showContactForm })),
  introRunning: false,
  setIntroRunning: (introRunning) => set(() => ({ introRunning }))
})
