import { NO_REMAINDER, PARITY_DIVISOR } from '@/lib/constants/math'

export default function isEven(value: number) {
  return value % PARITY_DIVISOR === NO_REMAINDER
}
