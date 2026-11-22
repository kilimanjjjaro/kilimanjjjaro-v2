'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import { useStore } from '@/lib/store/store'
import { CURSOR_VARIANTS } from '@/lib/constants/cursor'
import { TRANSITION } from '@/lib/constants/animation'
import getCenter from '@/lib/utils/getCenter'

export default function CustomCursor() {
  const { cursorStatus } = useStore()
  const cursorEl = useRef<HTMLDivElement>(null)
  const elementDimensions = useElementDimensions({ ref: cursorEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: getCenter(elementDimensions.width),
    translateY: getCenter(elementDimensions.height)
  })

  return (
    <motion.div
      ref={cursorEl}
      className='fixed hidden xl:block [transform:scale(0)] top-0 left-0 rounded-full pointer-events-none w-14 h-14 border-2 z-50 mix-blend-difference'
      style={{ x, y }}
      variants={CURSOR_VARIANTS}
      animate={cursorStatus}
      transition={TRANSITION}
    />
  )
}
