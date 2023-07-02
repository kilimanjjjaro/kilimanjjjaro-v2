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

interface Props {
  children: string
  baseVelocity: number
  className: string
}

export default function ParallaxHeadline({
  children,
  baseVelocity = 100,
  className
}: Props) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
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
    <div className='flex whitespace-nowrap flex-nowrap'>
      <motion.h2
        className={clsx(
          'flex flex-nowrap whitespace-nowrap will-change-transform',
          className
        )}
        style={{ x }}
      >
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
      </motion.h2>
    </div>
  )
}
