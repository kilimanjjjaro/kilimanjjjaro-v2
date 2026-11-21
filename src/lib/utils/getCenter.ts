import { CENTER_FACTOR } from '@/lib/constants/math'

export default function getCenter(size: number) {
  return size * CENTER_FACTOR
}
