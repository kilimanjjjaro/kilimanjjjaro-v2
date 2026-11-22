import { useSyncExternalStore } from 'react'
import subscribeToScroll from '@/lib/utils/subscribeToScroll'
import getScrollPercentage from '@/lib/utils/getScrollPercentage'
import { INITIAL_SCROLL_PERCENTAGE } from '@/lib/constants/scroll'

export default function useScroll() {
  const scrollPercentage = useSyncExternalStore(
    subscribeToScroll,
    getScrollPercentage,
    () => INITIAL_SCROLL_PERCENTAGE
  )

  return { scrollPercentage }
}
