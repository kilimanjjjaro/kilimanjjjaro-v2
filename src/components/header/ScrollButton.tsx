'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { useStore } from '@/lib/store/store'

export default function ScrollButton() {
  const { setCursorStatus } = useStore()
  const [isScrolling, setIsScrolling] = useState(false)
  const lenis = useLenis()

  const handleClick = () => {
    const elementRef = document.getElementById('featured-projects')

    if (elementRef != null) {
      lenis.scrollTo(elementRef, {
        duration: 1.5
      })
    }
  }

  useEffect(() => {
    lenis?.on('scroll', () => {
      setIsScrolling(true)
    })
  }, [lenis])

  return (
    <motion.button
      className='absolute bottom-0 text-sm transition-colors duration-1000 ease-in-out xl:text-base xl:bottom-8 text-kili-light-gray xl:hover:text-kili-white mix-blend-difference'
      onClick={handleClick}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      initial={{
        display: 'none',
        opacity: 0
      }}
      animate={
        isScrolling
          ? {
              display: 'block',
              opacity: 0,
              transition: {
                duration: 2.5,
                ease: 'easeOut'
              },
              transitionEnd: {
                display: 'none'
              }
            }
          : {
              display: 'block',
              opacity: 1,
              transition: {
                duration: 2.5,
                ease: 'easeIn',
                delay: 2
              }
            }
      }
    >
      Scroll
    </motion.button>
  )
}
