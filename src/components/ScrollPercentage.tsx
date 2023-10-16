'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import useScroll from '@/lib/hooks/useScroll'

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
        'fixed bottom-6 right-6 xl:bottom-8 xl:right-8 tracking-wide flex text-sm xl:text-base justify-center min-w-[48px] xl:min-w-[58px] pt-[6px] pb-[6px] px-2 xl:px-3 xl:pt-[10px] xl:pb-2 transition-transform ease-in-out duration-1000 xl:leading-none leading-none z-10 rounded-full bg-kili-white/60 text-kili-black backdrop-blur-sm',
        showScrollPercentage ? 'translate-y-0' : 'translate-y-[68px]'
      )}
    >
      {scrollPercentage}%
    </div>
  )
}
