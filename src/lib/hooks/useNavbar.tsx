import { useCallback, useEffect, useRef, useState } from 'react'
import {
  NAVBAR_COMPACT_THRESHOLD,
  NAVBAR_TOP_THRESHOLD,
  NavbarVersion
} from '@/lib/constants/navbar'
import { SCROLL_TOP } from '@/lib/constants/scroll'
import watchScroll from '@/lib/utils/watchScroll'

export default function useNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [version, setVersion] = useState(NavbarVersion.Large)
  const prevScrollPos = useRef(SCROLL_TOP)

  const handleScroll = useCallback(() => {
    const { scrollY: currentScrollPos } = window
    const isScrollingUp = prevScrollPos.current > currentScrollPos

    if (currentScrollPos < NAVBAR_TOP_THRESHOLD) {
      setVersion(NavbarVersion.Large)
    }

    if (currentScrollPos >= NAVBAR_COMPACT_THRESHOLD) {
      setVersion(NavbarVersion.Small)
    }

    if (currentScrollPos < window.innerHeight) return

    prevScrollPos.current =
      prevScrollPos.current === currentScrollPos
        ? prevScrollPos.current
        : currentScrollPos

    setIsVisible((prevState) => {
      if (prevState === isScrollingUp) {
        return prevState
      }

      return isScrollingUp
    })
  }, [])

  useEffect(() => watchScroll(handleScroll), [handleScroll])

  return { isVisible, version }
}
