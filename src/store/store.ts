import { create } from 'zustand'
import updateStacks from '@/utils/updateStacks'
import type { LanguageInterface, StackInterface } from '@/interfaces/general'
import { LANGUAGES } from '@/constants/general'

interface StoreInterface {
  navBarStatus: boolean
  setNavBarStatus: () => void
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (skill: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
  selectedLanguage: LanguageInterface
  setSelectedLanguage: (language: LanguageInterface) => void
}

const updatedStacks = updateStacks()

export const useStore = create<StoreInterface>((set) => ({
  navBarStatus: false,
  setNavBarStatus: () =>
    set((state) => ({ navBarStatus: !state.navBarStatus })),
  stacks: updatedStacks,
  selectedStack: updatedStacks[0],
  setSelectedStack: (skill) => set(() => ({ selectedStack: skill })),
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) =>
    set(() => ({ shouldMoveToStart })),
  selectedLanguage: LANGUAGES[0],
  setSelectedLanguage: (language) => set(() => ({ selectedLanguage: language }))
}))
