'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Approach from '@/components/knowledge/Approach'
import Clients from '@/components/knowledge/Clients'
import Experience from '@/components/knowledge/Experience'
import Education from '@/components/knowledge/Education'
import { MORE_PROJECTS_VARIANTS } from '@/lib/constants/variants'

export default function Content({ locale }: { locale: string }) {
  const sectionEl = useRef<HTMLElement>(null)
  const isInView = useInView(sectionEl, { once: true })

  return (
    <section ref={sectionEl} className='px-40 pt-32'>
      <motion.div
        variants={MORE_PROJECTS_VARIANTS}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 0, staggerChildren: 0.3 }}
      >
        <Approach locale={locale} />
        <Experience locale={locale} />
        <Education locale={locale} />
        <Clients />
      </motion.div>
    </section>
  )
}
