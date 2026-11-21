import type { StateCreator } from 'zustand'
import type { NavbarSliceInterface } from '@/lib/types/store'
import { NavbarVersion } from '@/lib/constants/navbar'

export const createNavbarSlice: StateCreator<NavbarSliceInterface> = (set) => ({
  navbarStatus: false,
  setNavbarStatus: (navbarStatus) => {
    set(() => ({ navbarStatus }))
  },
  navbarVersion: NavbarVersion.None,
  setNavbarVersion: (navbarVersion) => {
    set(() => ({ navbarVersion }))
  }
})
