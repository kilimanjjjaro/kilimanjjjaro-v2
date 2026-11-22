import { LIST_POSITION_OFFSET } from '@/lib/constants/math'

export default function toListPosition(index: number) {
  return index + LIST_POSITION_OFFSET
}
