'use client'

import { motion } from 'framer-motion'
import { useStore } from '@/store/store'

export default function IntroAnimation() {
  const { setIntroRunning } = useStore()

  return (
    <motion.div
      className='fixed inset-0 z-50 items-center justify-center overflow-hidden bg-kili-light-gray cursor-none'
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
        duration: 3,
        ease: [0.77, 0, 0.18, 1],
        delay: 4
      }}
      onAnimationComplete={() => setIntroRunning(false)}
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
          delay: 1.5
        }}
      />
      <span className='absolute overflow-hidden'>
        <motion.span
          className='block text-[300px] leading-none text-kili-light-gray'
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
          className='block text-3xl leading-none tracking-wider text-kili-white'
          initial={{
            y: '110%',
            rotate: 4
          }}
          animate={{
            y: '0%',
            rotate: 0
          }}
          transition={{
            duration: 2,
            ease: [0.17, 0.84, 0.44, 1],
            delay: 0.1
          }}
        >
          Kilimanjjjaro
        </motion.span>
      </span>
    </motion.div>
  )
}
