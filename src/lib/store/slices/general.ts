import { StateCreator } from 'zustand'
import type { GeneralSliceInterface } from '@/lib/types/store'

export const createGeneralSlice: StateCreator<GeneralSliceInterface> = (
  set
) => ({
  swiperInstance: null,
  setSwiperInstance: (swiperInstance) => set(() => ({ swiperInstance })),
  showContactForm: false,
  setShowContactForm: (showContactForm) => set(() => ({ showContactForm })),
  introRunning: false,
  setIntroRunning: (introRunning) => set(() => ({ introRunning }))
})
