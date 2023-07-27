'use client'

import { CURSOR_STATUS } from '@/constants/general'
import { useStore } from '@/store/store'
import { useLenis } from '@studio-freight/react-lenis'
import { motion } from 'framer-motion'

export default function ScrollButton() {
  const { setCursorStatus } = useStore()
  const lenis = useLenis()

  const handleClick = () => {
    const elementRef = document.getElementById('introducing')

    if (elementRef != null) {
      lenis.scrollTo(elementRef, {
        duration: 2
      })
    }
  }

  return (
    <motion.button
      className='absolute transition-colors duration-700 ease-in-out bottom-8 text-kili-light-gray hover:text-kili-white'
      onClick={handleClick}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      initial={{
        display: 'none',
        opacity: 0
      }}
      animate={{
        display: 'block',
        opacity: 1
      }}
      transition={{
        duration: 3,
        ease: 'easeIn',
        delay: 5.5
      }}
    >
      Scroll
    </motion.button>
  )
}
