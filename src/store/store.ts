import { create } from 'zustand'
import updateStacks from '@/utils/updateStacks'
import type { StackInterface } from '@/interfaces/general'

interface StoreInterface {
  navBarStatus: boolean
  setNavBarStatus: () => void
  stacks: StackInterface[]
  selectedStack: StackInterface
  setSelectedStack: (skill: StackInterface) => void
  shouldMoveToStart: boolean
  setShouldMoveToStart: (shouldMoveToStart: boolean) => void
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
    set(() => ({ shouldMoveToStart }))
}))
