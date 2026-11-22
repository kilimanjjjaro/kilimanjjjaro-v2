import type { StateCreator } from 'zustand'
import updateStacks from '@/lib/utils/updateStacks'
import type { SkillsSliceInterface } from '@/lib/types/store'

const updatedStacks = updateStacks()
const [firstStack] = updatedStacks

export const createSkillsSlice: StateCreator<SkillsSliceInterface> = (set) => ({
  stacks: updatedStacks,
  selectedStack: firstStack,
  setSelectedStack: (selectedStack) => {
    set(() => ({ selectedStack }))
  },
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) => {
    set(() => ({ shouldMoveToStart }))
  }
})
