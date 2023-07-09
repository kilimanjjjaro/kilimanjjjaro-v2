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

  return (
    <div
      className={clsx(
        'fixed bottom-8 right-8 tracking-wide flex justify-center min-w-[58px] px-3 pt-[10px] pb-2 transition-transform ease-in-out duration-500 leading-none rounded-full bg-kili-white/60 text-kili-black backdrop-blur-sm',
        showScrollPercentage ? 'translate-y-0' : 'translate-y-[68px]'
      )}
    >
      {scrollPercentage}%
    </div>
  )
}
