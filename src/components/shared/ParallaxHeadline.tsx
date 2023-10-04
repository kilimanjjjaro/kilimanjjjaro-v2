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
  const directionFactor = useRef(1)
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 10], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`)

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
    <div className='flex overflow-hidden whitespace-nowrap flex-nowrap'>
      <motion.h2
        className={clsx(
          'flex flex-nowrap whitespace-nowrap pb-[2px]',
          className
        )}
        style={{ x }}
      >
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
        <span className='mr-6'>{children} — </span>
      </motion.h2>
    </div>
  )
}
