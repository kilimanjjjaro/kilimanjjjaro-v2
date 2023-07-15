'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useElementDimensions from '@/hooks/useElementDimensions'
import useCursorPosition from '@/hooks/useCursorPosition'
import { useStore } from '@/store/store'
import { CURSOR_STATUS } from '@/constants/general'

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

  const VARIANTS = {
    hidden: {
      scale: 0,
      borderColor: 'rgba(248, 248, 248, 0)',
      backgroundColor: 'rgba(248, 248, 248, 0)'
    },
    visible: {
      scale: 1,
      borderColor: 'rgba(248, 248, 248, 1)',
      backgroundColor: 'rgba(248, 248, 248, 0)'
    },
    hover: {
      scale: 0.5,
      backgroundColor: 'rgba(248, 248, 248, 1)',
      borderColor: 'rgba(248, 248, 248, 0)'
    }
  }

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
      className='fixed scale-0 top-0 left-0 rounded-full pointer-events-none w-14 h-14 border-[2px] z-40 mix-blend-difference'
      style={{ x, y }}
      variants={VARIANTS}
      animate={cursorVariant}
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    />
  )
}
