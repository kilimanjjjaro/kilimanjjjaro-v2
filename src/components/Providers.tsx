'use client'

import { AnimatePresence } from 'framer-motion'
import SmoothScroll from '@/components/SmoothScroll'
import { useLenis } from '@studio-freight/react-lenis'
import type { ChildrenType } from '@/interfaces/general'

export default function Providers({ children }: { children: ChildrenType }) {
  const lenis = useLenis()

  return (
    <SmoothScroll>
      <AnimatePresence
        mode='wait'
        onExitComplete={() => lenis.scrollTo(0)}
        initial={false}
      >
        {children}
      </AnimatePresence>
    </SmoothScroll>
  )
}
