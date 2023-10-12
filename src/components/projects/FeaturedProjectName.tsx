import { motion } from 'framer-motion'
import { useRef } from 'react'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import type { ChildrenType } from '@/lib/interfaces/general'

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
      className='fixed top-0 left-0 z-10 overflow-hidden pointer-events-none'
      style={{ x, y }}
    >
      <motion.span
        className='block leading-none text-center text-kili-white text-10xl'
        initial={{
          y: '122%',
          rotate: 6
        }}
        animate={{
          y: isHovered === projectId ? '0%' : '122%',
          rotate: isHovered === projectId ? 0 : 6
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.span>
    </motion.h3>
  )
}
