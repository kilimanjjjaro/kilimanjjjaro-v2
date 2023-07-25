'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import Approach from '@/components/know-me/Approach'
import Clients from '@/components/know-me/Clients'
import ExperienceAndEducation from '@/components/know-me/ExperienceAndEducation'
import { OTHER_PROJECTS_VARIANTS } from '@/constants/variants'

export default function KnowMe() {
  const sectionEl = useRef<HTMLElement>(null)
  const isInView = useInView(sectionEl, { once: true })

  return (
    <section id='know-me' className='pt-32 bg-kili-dark-gray'>
      <ParallaxHeadline
        className='leading-none text-kili-white text-10xl'
        baseVelocity={-3}
      >
        Know Me
      </ParallaxHeadline>
      <section ref={sectionEl} className='px-40 pt-32 pb-36'>
        <motion.div
          variants={OTHER_PROJECTS_VARIANTS}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
          transition={{ duration: 0, staggerChildren: 0.3 }}
        >
          <Approach />
          <Clients />
          <ExperienceAndEducation />
        </motion.div>
      </section>
    </section>
  )
}
