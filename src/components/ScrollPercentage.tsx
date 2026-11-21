'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import useScroll from '@/lib/hooks/useScroll'
import watchScrollPercentage from '@/lib/utils/watchScrollPercentage'
import { SCROLL_PERCENTAGE_HIDE_DELAY_MS } from '@/lib/constants/scroll'

export default function ScrollPercentage() {
  const [showScrollPercentage, setShowScrollPercentage] = useState(false)
  const { scrollPercentage } = useScroll()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined

    const stopWatching = watchScrollPercentage(() => {
      setShowScrollPercentage(true)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setShowScrollPercentage(false)
      }, SCROLL_PERCENTAGE_HIDE_DELAY_MS)
    })

    return () => {
      stopWatching()
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      role='status'
      aria-label='Scroll percentage'
      className={clsx(
        'fixed bottom-6 right-6 xl:bottom-8 xl:right-8 tracking-wide flex text-xs xl:text-base justify-center min-w-[45px] xl:min-w-[58px] pt-2 pb-1.5 px-2 xl:px-3 xl:pt-[10px] xl:pb-2 transition-transform ease-in-out duration-1000 xl:leading-none leading-none z-10 rounded-full bg-kili-white/60 text-kili-black backdrop-blur-xs',
        showScrollPercentage ? 'translate-y-0' : 'translate-y-[68px]'
      )}
    >
      {scrollPercentage}%
    </div>
  )
}
