'use client'

import { useLenis } from '@studio-freight/react-lenis'
import { motion } from 'framer-motion'

export default function Header() {
  const lenis = useLenis()

  const handleClick = () => {
    if (lenis !== undefined) {
      const startOfSection = document.getElementById('introducing')?.offsetTop

      lenis.scrollTo(startOfSection, {
        duration: 3
      })
    }
  }

  return (
    <header className='flex items-center justify-center min-h-screen'>
      <motion.div
        initial={{
          scale: 1.3
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 3,
          ease: [0.17, 0.84, 0.44, 1],
          delay: 5
        }}
      >
        <h2 className='text-kili-white text-[200px] flex flex-col leading-[1.03]'>
          <span className='overflow-hidden'>
            <motion.span
              className='block'
              initial={{
                y: '100%',
                rotate: 4
              }}
              animate={{
                y: 0,
                rotate: 0
              }}
              transition={{
                duration: 3,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 5
              }}
            >
              Thinking{' '}
            </motion.span>
          </span>
          <span className='-my-4 overflow-hidden'>
            <motion.span
              className='flex items-center ml-64 gap-x-1'
              initial={{
                y: '100%',
                rotate: 4
              }}
              animate={{
                y: 0,
                rotate: 0
              }}
              transition={{
                duration: 3,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 5.3
              }}
            >
              future <span className='-mr-[6px]'>—</span> proof
            </motion.span>
          </span>
          <span className='ml-24 overflow-hidden'>
            <motion.span
              className='block'
              initial={{
                y: '100%',
                rotate: 4
              }}
              animate={{
                y: 0,
                rotate: 0
              }}
              transition={{
                duration: 3,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 5.5
              }}
            >
              experiences.
            </motion.span>
          </span>
        </h2>
      </motion.div>
      <motion.button
        className='absolute block leading-none tracking-wide duration-700 ease-in-out bottom-12 text-kili-light-gray animate-fade-in hover:text-kili-white'
        onClick={handleClick}
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
        (Scroll)
      </motion.button>
    </header>
  )
}
