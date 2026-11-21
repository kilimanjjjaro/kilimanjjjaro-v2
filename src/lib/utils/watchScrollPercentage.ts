import watchScroll from '@/lib/utils/watchScroll'
import getScrollPercentage from '@/lib/utils/getScrollPercentage'
import { INITIAL_SCROLL_PERCENTAGE } from '@/lib/constants/scroll'

export default function watchScrollPercentage(onChange: () => void) {
  let lastScrollPercentage = INITIAL_SCROLL_PERCENTAGE

  return watchScroll(() => {
    const scrollPercentage = getScrollPercentage()

    if (scrollPercentage === lastScrollPercentage) return

    lastScrollPercentage = scrollPercentage
    onChange()
  })
}
