'use client'

import { motion } from 'motion/react'
import {
  FADE_IN_STATE,
  FADE_OUT_STATE,
  REVEAL_TRANSITION
} from '@/lib/constants/animation'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={FADE_OUT_STATE}
      animate={FADE_IN_STATE}
      transition={REVEAL_TRANSITION}
    >
      {children}
    </motion.div>
  )
}
