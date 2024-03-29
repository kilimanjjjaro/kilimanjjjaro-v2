import { motion } from 'framer-motion'
import { useRef } from 'react'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import type { ChildrenType } from '@/lib/types/globals'

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
  const { isDesktop } = useMediaQuery()

  return (
    <motion.h3
      ref={projectNameEl}
      className='mix-blend-difference top-0 left-0 z-10 mt-6 overflow-hidden text-4xl leading-none pointer-events-none xl:fixed xl:selection:hidden xl:text-center text-kili-white xl:text-9xl 2xl:text-10xl'
      style={isDesktop ? { x, y } : { x: 0, y: 0 }}
    >
      <motion.span
        className='xl:block'
        initial={{
          y: '122%',
          rotate: 6
        }}
        animate={
          isDesktop
            ? {
                y: isHovered === projectId ? '0%' : '122%',
                rotate: isHovered === projectId ? 0 : 6
              }
            : {
                y: '0%',
                rotate: 0
              }
        }
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
