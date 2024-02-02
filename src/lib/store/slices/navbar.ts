import { StateCreator } from 'zustand'
import type { NavbarSliceInterface } from '@lib/types/store'

export const createNavbarSlice: StateCreator<NavbarSliceInterface> = (set) => ({
  navbarStatus: false,
  setNavbarStatus: (navbarStatus) => set(() => ({ navbarStatus })),
  navbarVersion: 0,
  setNavbarVersion: (navbarVersion) => set(() => ({ navbarVersion }))
})
