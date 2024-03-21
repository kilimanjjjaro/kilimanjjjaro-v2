import { StateCreator } from 'zustand'
import updateStacks from '@/lib/utils/updateStacks'
import type { SkillsSliceInterface } from '@/lib/types/store'

const updatedStacks = updateStacks()

export const createSkillsSlice: StateCreator<SkillsSliceInterface> = (set) => ({
  stacks: updatedStacks,
  selectedStack: updatedStacks[0],
  setSelectedStack: (selectedStack) => set(() => ({ selectedStack })),
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) =>
    set(() => ({ shouldMoveToStart }))
})
