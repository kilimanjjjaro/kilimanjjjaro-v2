import { create } from 'zustand'
import updateStacks from '@/utils/updateStacks'
import { LANGUAGES } from '@/constants/general'
import type { StoreInterface } from '@/interfaces/general'

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
  setSelectedLanguage: (selectedLanguage) => set(() => ({ selectedLanguage }))
}))
