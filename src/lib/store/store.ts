import { createWithEqualityFn } from 'zustand/traditional'
import { createGeneralSlice } from '@/lib/store/slices/general'
import { createNavbarSlice } from '@/lib/store/slices/navbar'
import { createSkillsSlice } from '@/lib/store/slices/skills'
import type { StoreInterface } from '@/lib/types/store'

export const useStore = createWithEqualityFn<StoreInterface>((...a) => ({
  ...createGeneralSlice(...a),
  ...createNavbarSlice(...a),
  ...createSkillsSlice(...a)
}))
