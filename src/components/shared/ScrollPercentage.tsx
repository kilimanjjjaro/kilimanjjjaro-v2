'use client'

import { useEffect, useState } from 'react'

export default function ScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    const currentScrollPercentage = Math.round(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    )

    setScrollPercentage(currentScrollPercentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <>{scrollPercentage}%</>
}
