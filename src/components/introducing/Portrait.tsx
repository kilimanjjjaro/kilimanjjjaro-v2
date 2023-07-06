'use client'

import Image from 'next/image'
import portraitImage from '../../../public/images/portrait.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import { forwardRef } from 'react'

export default function Portrait() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2])

  const ImageComponent = forwardRef<HTMLImageElement>((props, ref) => (
    <Image
      ref={ref}
      className='-mt-28'
      src={portraitImage}
      alt='Kilimanjjjaro'
      quality={100}
      priority
      {...props}
    />
  ))

  ImageComponent.displayName = 'ImageComponent'
  const MotionImage = motion(ImageComponent)

  return (
    <MotionImage
      style={{
        y,
        scale
      }}
    />
  )
}
