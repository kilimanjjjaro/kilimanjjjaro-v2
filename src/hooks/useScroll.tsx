import { useEffect, useState } from 'react'

export default function useScroll() {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos

      setIsVisible(isScrollingUp)

      prevScrollPos = currentScrollPos

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const currentScrollPercentage = Math.round(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      )

      setScrollPercentage(currentScrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isVisible, scrollPercentage }
}
