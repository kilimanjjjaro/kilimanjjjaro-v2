'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import portraitImage from '../../../public/images/portrait.webp'
import { useScopedI18n } from '@/lib/i18n/client'

export default function Portrait() {
  const t = useScopedI18n('home.introducing')
  const imageEl = useRef<HTMLDivElement>(null)
  const isInView = useInView(imageEl, { once: true })

  return (
    <motion.div
      ref={imageEl}
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
      <Image src={portraitImage} alt={t('sectionTitle')} priority />
    </motion.div>
  )
}
