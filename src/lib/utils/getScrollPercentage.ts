import {
  INITIAL_SCROLL_PERCENTAGE,
  PERCENTAGE_MULTIPLIER,
  SCROLL_TOP
} from '@/lib/constants/scroll'

export default function getScrollPercentage() {
  const {
    documentElement: { scrollTop, scrollHeight, clientHeight }
  } = document

  if (scrollTop === SCROLL_TOP) return INITIAL_SCROLL_PERCENTAGE

  return Math.round(
    (scrollTop / (scrollHeight - clientHeight)) * PERCENTAGE_MULTIPLIER
  )
}
