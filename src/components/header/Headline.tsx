'use client'

import { useStore } from '@/lib/store/store'
import { motion } from 'framer-motion'

export default function Headline() {
  const { setIntroRunning } = useStore()

  return (
    <motion.div
      initial={{
        scale: 1.3
      }}
      animate={{
        scale: 1
      }}
      transition={{
        duration: 3,
        ease: [0.17, 0.84, 0.44, 1]
      }}
    >
      <h2 className='text-kili-white text-[200px] flex flex-col leading-[1.03]'>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{
              y: '112%',
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
            Thinking{' '}
          </motion.span>
        </span>
        <span className='-my-4 overflow-hidden'>
          <motion.span
            className='flex items-center ml-64 gap-x-1'
            initial={{
              y: '110%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.84, 0.44, 1],
              delay: 0.3
            }}
          >
            future <span className='-mr-[6px]'>—</span> proof
          </motion.span>
        </span>
        <span className='ml-24 overflow-hidden'>
          <motion.span
            className='block'
            initial={{
              y: '110%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.84, 0.44, 1],
              delay: 0.5
            }}
            onAnimationComplete={() => setIntroRunning(false)}
          >
            experiences.
          </motion.span>
        </span>
      </h2>
    </motion.div>
  )
}
