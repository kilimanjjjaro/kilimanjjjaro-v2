'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import useScroll from '@lib/hooks/useScroll'

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
    <aside className='pointer-events-none fixed bottom-0 right-16 top-0 flex items-center mix-blend-difference'>
      <div
        role='status'
        aria-label='Scroll percentage'
        className='z-10 overflow-hidden text-right font-geist-mono text-lg leading-none text-monospace-white'
      >
        <span
          className={clsx(
            'flex justify-center transition-transform duration-700 ease-in-out',
            showScrollPercentage ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          {scrollPercentage}%
        </span>
      </div>
    </aside>
  )
}
