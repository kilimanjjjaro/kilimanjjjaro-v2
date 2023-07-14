'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useElementDimensions from '@/hooks/useElementDimensions'
import useCursorPosition from '@/hooks/useCursorPosition'
import { useStore } from '@/store/store'
import { CURSOR_STATUS } from '@/constants/general'

export default function CustomCursor() {
  const cursorEl = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(true)
  const elementDimensions = useElementDimensions({ ref: cursorEl })
  const { x, y } = useCursorPosition({
    trigger: isHovered,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })
  const { cursorStatus } = useStore()

  useEffect(() => {
    const bodyEl = document.body

    if (bodyEl === null) return

    bodyEl.addEventListener('mouseenter', () => setIsHovered(true))
    bodyEl.addEventListener('mouseleave', () => setIsHovered(false))

    return () => {
      bodyEl.removeEventListener('mouseenter', () => setIsHovered(true))
      bodyEl.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [])

  return (
    <motion.div
      ref={cursorEl}
      className='fixed scale-0 top-0 left-0 rounded-full pointer-events-none w-14 h-14 border-[2px] border-kili-white z-50 mix-blend-difference'
      style={{
        x,
        y
      }}
      animate={
        isHovered && cursorStatus !== CURSOR_STATUS.HIDDEN
          ? { scale: 1 }
          : { scale: 0 }
      }
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    />
  )
}
