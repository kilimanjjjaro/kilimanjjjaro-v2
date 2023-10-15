'use client'

import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { motion, useInView } from 'framer-motion'
import Approach from '@/components/knowledge/Approach'
import Clients from '@/components/knowledge/Clients'
import Experience from '@/components/knowledge/Experience'
import Education from '@/components/knowledge/Education'
import { OTHER_PROJECTS_VARIANTS } from '@/lib/constants/variants'
import { useScopedI18n } from '@/lib/i18n/client'
import { useRef } from 'react'

export default function Knowledge() {
  const t = useScopedI18n('home.knowledge')
  const sectionEl = useRef<HTMLElement>(null)
  const isInView = useInView(sectionEl, { once: true })

  return (
    <section id='knowledge' className='pt-32 pb-40 bg-kili-dark-gray'>
      <ParallaxHeadline className='text-kili-white text-10xl' baseVelocity={-3}>
        {t('sectionTitle')}
      </ParallaxHeadline>
      <section ref={sectionEl} className='px-40 pt-32'>
        <motion.div
          variants={OTHER_PROJECTS_VARIANTS}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
          transition={{ duration: 0, staggerChildren: 0.3 }}
        >
          <Approach />
          <Education />
          <Experience />
          <Clients />
        </motion.div>
      </section>
    </section>
  )
}
