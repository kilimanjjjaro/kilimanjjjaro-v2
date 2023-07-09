'use client'

import { motion } from 'framer-motion'

export default function IntroAnimation() {
  return (
    <motion.div
      className='fixed inset-0 z-50 items-center justify-center overflow-hidden bg-kili-light-gray'
      initial={{
        display: 'flex',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 108%, 0% 100%)'
      }}
      animate={{
        display: 'flex',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        transitionEnd: {
          display: 'none'
        }
      }}
      transition={{
        duration: 2,
        ease: [0.77, 0, 0.18, 1],
        delay: 4
      }}
    >
      <motion.div
        className='absolute inset-0 bg-kili-black'
        initial={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 108%, 0% 100%)'
        }}
        animate={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        }}
        transition={{
          duration: 3,
          ease: [0.77, 0, 0.18, 1],
          delay: 1
        }}
      />
      <span className='absolute overflow-hidden'>
        <motion.span
          className='block text-[300px] leading-none tracking-wider text-kili-light-gray'
          initial={{
            y: '102%',
            rotate: 4
          }}
          animate={{
            y: '0%',
            rotate: 0
          }}
          transition={{
            duration: 3,
            ease: [0.17, 0.84, 0.44, 1]
          }}
        >
          Since '17
        </motion.span>
      </span>
      <span className='absolute overflow-hidden'>
        <motion.span
          className='block text-3xl leading-[1.1] font-light tracking-wider text-kili-white'
          initial={{
            y: '104%',
            rotate: 4
          }}
          animate={{
            y: '0%',
            rotate: 0
          }}
          transition={{
            duration: 2,
            ease: [0.17, 0.84, 0.44, 1]
          }}
        >
          kilimanjjjaro
        </motion.span>
      </span>
    </motion.div>
  )
}
