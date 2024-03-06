'use client'

import { useRef } from 'react'
import { wrap } from '@motionone/utils'
import clsx from 'clsx'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import type { ChildrenType } from '@lib/types/general'

interface Props {
  children: ChildrenType
  baseVelocity: number
  className?: string
}

export default function HeadlineMarquee({
  children,
  baseVelocity = 100,
  className
}: Props) {
  const directionFactor = useRef(-1)
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 8], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='flex w-full flex-nowrap overflow-hidden whitespace-nowrap'>
      <motion.h2
        className={clsx('flex flex-nowrap whitespace-nowrap pb-0.5', className)}
        style={{ x }}
      >
        {new Array(4).fill(null).map((_, index) => (
          <motion.span
            key={index}
            className='mr-1.5 flex items-center gap-24 xl:mr-24'
            initial={{ y: '102%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
              delay: 0.1 * index
            }}
          >
            {children}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}
