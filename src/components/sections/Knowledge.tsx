'use client'

import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
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
    <section
      id='knowledge'
      className='pt-20 pb-24 xl:pt-32 xl:pb-40 bg-kili-dark-gray'
    >
      <HeadlineMarquee
        className='text-6xl text-kili-white xl:text-10xl'
        baseVelocity={-3}
      >
        {t('sectionTitle')}
      </HeadlineMarquee>
      <section ref={sectionEl} className='px-6 pt-12 xl:px-40 xl:pt-32'>
        <motion.div
          className='flex flex-col gap-6 xl:gap-0'
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
