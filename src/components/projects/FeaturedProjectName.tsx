import { motion } from 'motion/react'
import { useRef } from 'react'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import getCenter from '@/lib/utils/getCenter'
import {
  HEADLINE_REVEAL_ROTATION,
  NO_OFFSET,
  NO_ROTATION,
  TRANSITION
} from '@/lib/constants/animation'
import type { ChildrenType } from '@/lib/types/globals'

interface Props {
  children: ChildrenType
  projectSlug: string
  isHovered: string | null
}

export default function FeaturedProjectName({
  children,
  projectSlug,
  isHovered
}: Props) {
  const projectNameEl = useRef<HTMLHeadingElement>(null)
  const elementDimensions = useElementDimensions({ ref: projectNameEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: getCenter(elementDimensions.width),
    translateY: getCenter(elementDimensions.height)
  })
  const { isDesktop } = useMediaQuery()
  const isActive = isHovered === projectSlug

  return (
    <motion.h3
      ref={projectNameEl}
      className='mix-blend-difference top-0 left-0 z-10 mt-6 overflow-hidden text-4xl leading-none pointer-events-none xl:fixed xl:selection:hidden xl:text-center text-kili-white xl:text-9xl 2xl:text-10xl'
      style={isDesktop ? { x, y } : { x: NO_OFFSET, y: NO_OFFSET }}
    >
      <motion.span
        className='xl:block'
        initial={{
          y: '122%',
          rotate: HEADLINE_REVEAL_ROTATION
        }}
        animate={
          isDesktop
            ? {
                y: isActive ? '0%' : '122%',
                rotate: isActive ? NO_ROTATION : HEADLINE_REVEAL_ROTATION
              }
            : {
                y: '0%',
                rotate: NO_ROTATION
              }
        }
        transition={TRANSITION}
      >
        {children}
      </motion.span>
    </motion.h3>
  )
}
