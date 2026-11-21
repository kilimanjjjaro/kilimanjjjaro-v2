'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import {
  FADE_IN_DELAY,
  FADE_IN_DURATION,
  HIDDEN_OPACITY,
  VISIBLE_OPACITY
} from '@/lib/constants/animation'
import { PAGE_SCROLL_DURATION } from '@/lib/constants/scroll'
import { useStore } from '@/lib/store/store'

export default function ScrollButton() {
  const { setCursorStatus } = useStore()
  const [isScrolling, setIsScrolling] = useState(false)
  const lenis = useLenis()

  const handleClick = () => {
    const elementRef = document.getElementById('projects')

    if (elementRef !== null) {
      lenis?.scrollTo(elementRef, {
        duration: PAGE_SCROLL_DURATION
      })
    }
  }

  useEffect(
    () =>
      lenis?.on('scroll', ({ isScrolling }) => {
        if (isScrolling !== false) setIsScrolling(true)
      }),
    [lenis]
  )

  return (
    <motion.button
      className='absolute bottom-0 text-sm transition-colors duration-1000 ease-in-out xl:text-base xl:bottom-8 text-kili-light-gray xl:hover:text-kili-white mix-blend-difference'
      onClick={handleClick}
      onMouseEnter={() => {
        setCursorStatus(CURSOR_STATUS.HOVER)
      }}
      onMouseLeave={() => {
        setCursorStatus(CURSOR_STATUS.DEFAULT)
      }}
      initial={{
        display: 'none',
        opacity: HIDDEN_OPACITY
      }}
      animate={
        isScrolling
          ? {
              display: 'block',
              opacity: HIDDEN_OPACITY,
              transition: {
                duration: FADE_IN_DURATION,
                ease: 'easeOut'
              },
              transitionEnd: {
                display: 'none'
              }
            }
          : {
              display: 'block',
              opacity: VISIBLE_OPACITY,
              transition: {
                duration: FADE_IN_DURATION,
                ease: 'easeIn',
                delay: FADE_IN_DELAY
              }
            }
      }
    >
      Scroll
    </motion.button>
  )
}
