'use client'

import { useRef } from 'react'
import wrap from '@/lib/utils/wrap'
import { MS_PER_SECOND } from '@/lib/constants/math'
import {
  BACKWARD_DIRECTION,
  FORWARD_DIRECTION,
  MARQUEE_INITIAL_POSITION,
  MARQUEE_SPRING,
  MARQUEE_VELOCITY_INPUT,
  MARQUEE_VELOCITY_OUTPUT,
  MARQUEE_WRAP_END,
  MARQUEE_WRAP_START,
  NO_VELOCITY
} from '@/lib/constants/marquee'
import clsx from 'clsx'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react'

interface Props {
  children: string
  baseVelocity: number
  className: string
}

export default function HeadlineMarquee({
  children,
  baseVelocity,
  className
}: Props) {
  const directionFactor = useRef(FORWARD_DIRECTION)
  const baseX = useMotionValue(MARQUEE_INITIAL_POSITION)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, MARQUEE_SPRING)
  const velocityFactor = useTransform(
    smoothVelocity,
    MARQUEE_VELOCITY_INPUT,
    MARQUEE_VELOCITY_OUTPUT,
    { clamp: false }
  )

  const x = useTransform(
    baseX,
    (v) => `${wrap(MARQUEE_WRAP_START, MARQUEE_WRAP_END, v)}%`
  )

  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * baseVelocity * (delta / MS_PER_SECOND)

    if (velocityFactor.get() < NO_VELOCITY) {
      directionFactor.current = BACKWARD_DIRECTION
    } else if (velocityFactor.get() > NO_VELOCITY) {
      directionFactor.current = FORWARD_DIRECTION
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='flex w-full overflow-hidden whitespace-nowrap flex-nowrap'>
      <motion.h2
        className={clsx('flex flex-nowrap whitespace-nowrap pb-0.5', className)}
        style={{ x }}
      >
        <span className='mr-1.5 xl:mr-6'>{children} — </span>
        <span className='mr-1.5 xl:mr-6'>{children} — </span>
        <span className='mr-1.5 xl:mr-6'>{children} — </span>
        <span className='mr-1.5 xl:mr-6'>{children} — </span>
        <span className='mr-1.5 xl:mr-6'>{children} — </span>
      </motion.h2>
    </div>
  )
}
