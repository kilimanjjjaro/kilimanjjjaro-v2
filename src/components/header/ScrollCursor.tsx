'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useCursorPosition from '@/hooks/useCursorPosition'
import useElementDimensions from '@/hooks/useElementDimensions'
import { useStore } from '@/store/store'
import { CURSOR_STATUS } from '@/constants/general'

export default function ScrollCursor() {
  const cursorEl = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const elementDimensions = useElementDimensions({
    ref: cursorEl
  })
  const { x, y } = useCursorPosition({
    trigger: isHovered,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })
  const { setCursorStatus } = useStore()

  useEffect(() => {
    const headerEl = document.getElementById('header')

    if (headerEl === null) return

    const handleMouseEnter = () => {
      setIsHovered(true)
      setCursorStatus(CURSOR_STATUS.HIDDEN)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setCursorStatus(CURSOR_STATUS.VISIBLE)
    }

    headerEl.addEventListener('mouseenter', handleMouseEnter)
    headerEl.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      headerEl.removeEventListener('mouseenter', handleMouseEnter)
      headerEl.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cursorEl}
      className='fixed top-0 left-0 overflow-hidden pointer-events-none'
      style={{
        x,
        y
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
