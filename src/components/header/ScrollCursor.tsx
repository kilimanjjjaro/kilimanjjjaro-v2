'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useCursorPosition from '@/hooks/useCursorPosition'

export default function ScrollCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorPosition = useCursorPosition({ trigger: isHovered })

  useEffect(() => {
    const headerEl = document.getElementById('header')

    if (headerEl === null) return

    headerEl.addEventListener('mouseenter', () => setIsHovered(true))
    headerEl.addEventListener('mouseleave', () => setIsHovered(false))

    return () => {
      headerEl.removeEventListener('mouseenter', () => setIsHovered(true))
      headerEl.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [])

  return (
    <motion.div
      className='fixed top-0 left-0 overflow-hidden pointer-events-none'
      style={{
        x: `calc(${cursorPosition.x}px - 50%)`,
        y: `calc(${cursorPosition.y}px - 50%)`
      }}
    >
      <motion.span
        className='block text-6xl text-kili-light-gray'
        initial={{ y: '100%', rotate: 6 }}
        animate={isHovered ? { y: '0%', rotate: 0 } : { y: '100%', rotate: 6 }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut'
        }}
      >
        Scroll
      </motion.span>
    </motion.div>
  )
}
