import { motion } from 'framer-motion'
import { useRef } from 'react'
import useCursorPosition from '@/hooks/useCursorPosition'
import useElementDimensions from '@/hooks/useElementDimensions'
import type { ChildrenType } from '@/interfaces/general'

interface Props {
  children: ChildrenType
  projectId: number
  isHovered: number | null
}

export default function FeaturedProjectName({
  children,
  projectId,
  isHovered
}: Props) {
  const projectNameEl = useRef<HTMLHeadingElement>(null)
  const elementDimensions = useElementDimensions({ ref: projectNameEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })

  return (
    <motion.h3
      ref={projectNameEl}
      className='fixed top-0 left-0 overflow-hidden pointer-events-none'
      style={{ x, y }}
    >
      <motion.span
        className='block leading-none text-center text-kili-white text-9xl'
        initial={{
          y: '105%'
        }}
        animate={{
          y: isHovered === projectId ? '0%' : '105%'
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.span>
    </motion.h3>
  )
}
