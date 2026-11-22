'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useInView, useTransform } from 'motion/react'
import portraitImage from '../../../public/images/portrait.webp'
import { useScopedI18n } from '@/lib/i18n/client'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import {
  CLIP_HIDDEN_STATE,
  CLIP_VISIBLE_STATE,
  INTRO_TRANSITION,
  PORTRAIT_PARALLAX_END,
  PORTRAIT_PARALLAX_START
} from '@/lib/constants/animation'

export default function Portrait() {
  const t = useScopedI18n('home.introducing')
  const { isDesktop } = useMediaQuery()
  const imageEl = useRef<HTMLDivElement>(null)
  const isInView = useInView(imageEl, { once: true })
  const { scrollYProgress } = useScroll()
  const y = useTransform(
    scrollYProgress,
    [PORTRAIT_PARALLAX_START, PORTRAIT_PARALLAX_END],
    ['10%', '-10%']
  )

  return (
    <motion.div
      ref={imageEl}
      initial={CLIP_HIDDEN_STATE}
      animate={isInView && CLIP_VISIBLE_STATE}
      transition={INTRO_TRANSITION}
      style={isDesktop ? { y } : {}}
    >
      <Image src={portraitImage} alt={t('sectionTitle')} preload quality={95} />
    </motion.div>
  )
}
