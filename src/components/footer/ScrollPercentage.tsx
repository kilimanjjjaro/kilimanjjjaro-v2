'use client'

import useScroll from '@/hooks/useScroll'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function ScrollPercentage() {
  const [showScrollPercentage, setShowScrollPercentage] = useState(false)
  const { scrollPercentage } = useScroll()
  const [lastScrollPercentage, setLastScrollPercentage] =
    useState(scrollPercentage)

  useEffect(() => {
    if (scrollPercentage !== lastScrollPercentage) {
      setShowScrollPercentage(true)
      setLastScrollPercentage(scrollPercentage)
    } else {
      const timeoutId = setTimeout(() => {
        setShowScrollPercentage(false)
      }, 2500)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [scrollPercentage, lastScrollPercentage])

  console.log(showScrollPercentage)
  console.log(scrollPercentage)

  return (
    <div
      className={clsx(
        'fixed bottom-8 right-8 px-2 pt-[4px] translate-y-16 transition-transform ease-out duration-500 pb-[2px] rounded-sm bg-kili-white/60 text-kili-black backdrop-blur-sm',
        showScrollPercentage && 'translate-y-0'
      )}
    >
      {scrollPercentage}%
    </div>
  )
}
