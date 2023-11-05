'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { CURSOR_VARIANTS } from '@/lib/constants/variants'

export default function CustomCursor() {
  const { cursorStatus } = useStore()
  const cursorEl = useRef<HTMLDivElement>(null)
  const [cursorVariant, setCursorVariant] = useState(CURSOR_STATUS.DEFAULT)
  const elementDimensions = useElementDimensions({ ref: cursorEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })

  useEffect(() => {
    if (cursorStatus === CURSOR_STATUS.HIDDEN) {
      setCursorVariant(CURSOR_STATUS.HIDDEN)
    }

    if (cursorStatus === CURSOR_STATUS.DEFAULT) {
      setCursorVariant(CURSOR_STATUS.DEFAULT)
    }

    if (cursorStatus === CURSOR_STATUS.HOVER) {
      setCursorVariant(CURSOR_STATUS.HOVER)
    }
  }, [cursorStatus])

  return (
    <motion.div
      ref={cursorEl}
      className='fixed hidden xl:block scale-0 top-0 left-0 rounded-full pointer-events-none w-14 h-14 border-[2px] z-50 mix-blend-difference'
      style={{ x, y }}
      variants={CURSOR_VARIANTS}
      animate={cursorVariant}
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    />
  )
}
