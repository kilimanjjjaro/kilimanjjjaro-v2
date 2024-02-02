import { motion } from 'framer-motion'
import { useRef } from 'react'
import useCursorPosition from '@lib/hooks/useCursorPosition'
import useElementDimensions from '@lib/hooks/useElementDimensions'
import useMediaQuery from '@lib/hooks/useMediaQuery'
import type { ChildrenType } from '@lib/types/general'

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
      className='pointer-events-none left-0 top-0 z-10 mt-6 overflow-hidden text-4xl leading-none text-monospace-white xl:fixed xl:text-center xl:text-8xl xl:selection:hidden'
      style={isDesktop ? { x, y } : { x: 0, y: 0 }}
    >
      <motion.span
        className='xl:block'
        initial={{
          y: '130%',
          rotate: 6
        }}
        animate={
          isDesktop
            ? {
                y: isHovered === projectId ? '0%' : '130%',
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
