'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { CURSOR_STATUS } from '@/constants/general'
import { useStore } from '@/store/store'

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
      className='absolute transition-colors duration-700 ease-in-out bottom-8 text-kili-light-gray hover:text-kili-white mix-blend-difference'
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
                duration: 2,
                ease: 'easeOut'
              }
            }
          : {
              display: 'block',
              opacity: 1,
              transition: {
                duration: 3,
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
