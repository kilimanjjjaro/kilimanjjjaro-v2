'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import portraitImage from '../../../public/images/portrait.webp'
import clsx from 'clsx'

export default function Portrait() {
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(imageRef, { margin: '-300px', once: true })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div
      className='overflow-hidden bg-kili-dark-gray'
      ref={imageRef}
      initial={{
        clipPath: 'inset(100% 0% 0% 0%)'
      }}
      animate={
        isInView && {
          clipPath: 'inset(0% 0% 0% 0%)'
        }
      }
      transition={{
        duration: 3,
        ease: [0.17, 0.84, 0.44, 1]
      }}
    >
      <Image src={portraitImage} alt='Kilimanjjjaro' quality={100} priority />
    </motion.div>
  )
}
