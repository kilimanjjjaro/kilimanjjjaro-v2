'use client'

import { motion } from 'framer-motion'

export default function ScrollButton() {
  return (
    <motion.span
      className='absolute duration-700 ease-in-out bottom-8 text-kili-light-gray hover:text-kili-white'
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 3,
        ease: 'easeIn',
        delay: 5.5
      }}
    >
      Scroll
    </motion.span>
  )
}
