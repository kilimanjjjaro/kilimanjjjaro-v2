import { useCallback, useEffect, useState } from 'react'

export default function useScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const getScrollPercentage = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    const currentScrollPercentage = Math.round(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    )

    setScrollPercentage(currentScrollPercentage)
  }, [])

  useEffect(() => {
    getScrollPercentage()

    window.addEventListener('scroll', getScrollPercentage)

    return () => {
      window.removeEventListener('scroll', getScrollPercentage)
    }
  }, [getScrollPercentage])

  return { scrollPercentage }
}
