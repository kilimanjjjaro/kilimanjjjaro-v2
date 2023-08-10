'use client'

import { motion } from 'framer-motion'
import type { ChildrenType } from '@/interfaces/general'

export default function PageTransition({
  children
}: {
  children: ChildrenType
}) {
  return (
    <motion.div
      initial={{ y: -12, scale: 1.3 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ y: 12, scale: 1.3 }}
      transition={{
        duration: 2,
        ease: [0.77, 0, 0.18, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
