import { useEffect, useState } from 'react'

export default function useMediaQuery() {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setViewportWidth(window.innerWidth)

    if (viewportWidth < 768) {
      setIsMobile(true)
      setIsTablet(false)
      setIsDesktop(false)
    }

    if (viewportWidth >= 768 && viewportWidth < 1280) {
      setIsMobile(false)
      setIsTablet(true)
      setIsDesktop(false)
    }

    if (viewportWidth >= 1280) {
      setIsMobile(false)
      setIsTablet(false)
      setIsDesktop(true)
    }

    window.addEventListener('resize', () => setViewportWidth(window.innerWidth))

    return () =>
      window.removeEventListener('resize', () =>
        setViewportWidth(window.innerWidth)
      )
  }, [viewportWidth])

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
