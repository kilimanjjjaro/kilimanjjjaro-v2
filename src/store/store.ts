import { create } from 'zustand'

interface NavBarStateInterface {
  isOpen: boolean
  setIsOpen: () => void
}

export const useNavBar = create<NavBarStateInterface>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))
