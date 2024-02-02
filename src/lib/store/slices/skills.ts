import { StateCreator } from 'zustand'
import { STACKS } from '@lib/constants/general'
import type { SkillsSliceInterface } from '@lib/types/store'

export const createSkillsSlice: StateCreator<SkillsSliceInterface> = (set) => ({
  selectedStack: STACKS[0],
  setSelectedStack: (selectedStack) => set(() => ({ selectedStack })),
  shouldMoveToStart: false,
  setShouldMoveToStart: (shouldMoveToStart) =>
    set(() => ({ shouldMoveToStart }))
})
