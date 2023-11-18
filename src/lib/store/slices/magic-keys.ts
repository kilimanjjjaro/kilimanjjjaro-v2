import { StateCreator } from 'zustand'
import type { MagicKeysSliceInterface } from '@/lib/types/store'

export const createMagicKeysSlice: StateCreator<MagicKeysSliceInterface> = (
  set
) => ({
  successCombination: false,
  setSuccessCombination: (successCombination) =>
    set(() => ({ successCombination }))
})
