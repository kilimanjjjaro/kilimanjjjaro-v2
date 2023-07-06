'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '450%'])

  return (
    <header
      ref={headerRef}
      className='flex items-center justify-center min-h-screen'
    >
      <motion.h1
        className='text-kili-white text-8xl 2xl:text-[150px] flex flex-col items-center leading-[1.05] gap-y-3'
        style={{ y: headlineY }}
      >
        <span className='overflow-hidden'>
          <span className='block translate-y-full animate-fade-in-headline'>
            Developing & Designing
          </span>
        </span>{' '}
        <span className='overflow-hidden'>
          <span className='block translate-y-full animate-fade-in-headline-delay'>
            with Consciousness.
          </span>
        </span>
      </motion.h1>
    </header>
  )
}
