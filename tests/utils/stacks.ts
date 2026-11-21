import type { StackInterface } from '@/lib/types/globals'

export function findStackIdAt(stacks: StackInterface[], index: number) {
  return stacks.find(
    ({ startIndex, endIndex }) => index >= startIndex && index <= endIndex
  )?.id
}
