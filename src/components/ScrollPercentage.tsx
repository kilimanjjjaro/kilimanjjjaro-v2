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
    <aside className='fixed top-0 bottom-0 right-16 flex items-center mix-blend-difference pointer-events-none'>
      <div
        role='status'
        aria-label='Scroll percentage'
        className='text-monospace-white font-geist-mono text-lg text-right leading-none overflow-hidden z-10'
      >
        <span
          className={clsx(
            'flex justify-center transition-transform ease-in-out duration-700',
            showScrollPercentage ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          {scrollPercentage}%
        </span>
      </div>
    </aside>
  )
}
