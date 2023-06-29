import { useCallback, useEffect, useRef, useState } from 'react'

export default function useScroll() {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const prevScrollPosRef = useRef(0)

  const getScrollPercentage = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const currentScrollPercentage = Math.round(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    )
    setScrollPercentage(currentScrollPercentage)
  }, [])

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPosRef.current > currentScrollPos

    console.log('currentScrollPos', currentScrollPos)

    setIsVisible(isScrollingUp)
    prevScrollPosRef.current = currentScrollPos

    getScrollPercentage()
  }, [getScrollPercentage])

  useEffect(() => {
    getScrollPercentage()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, getScrollPercentage])

  return { isVisible, scrollPercentage }
}
