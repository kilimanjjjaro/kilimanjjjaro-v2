'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FeaturedProject from '@components/projects/FeaturedProject'
import { useCurrentLocale } from '@lib/i18n/client'
import { LOCALES } from '@lib/constants/general'
import { FEATURED_PROJECTS } from '@lib/constants/projects'

export default function Projects() {
  const sectionEl = useRef<HTMLElement>(null)
  const currentLocale = useCurrentLocale()
  const { scrollYProgress } = useScroll({
    target: sectionEl,
    offset: ['start end', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  const featuredProjects =
    currentLocale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  return (
    <motion.section
      id='projects'
      ref={sectionEl}
      className='bg-monospace-black xl:px-44 xl:py-44'
    >
      <h2 className='mb-28 flex flex-col text-10xl font-semibold uppercase text-monospace-white'>
        <span className='translate-x-32'>Some projects </span>
        <span>to highlight</span>
      </h2>
      <p className='mb-32 ml-60 w-2/3 text-balance text-5xl leading-semi-tight text-monospace-light-gray'>
        <span className='block'>Since 2017_</span> designing and developing for
        brands, agencies and independent studios. Below you can see some of
        them.
      </p>
      <section className='grid grid-cols-2 xl:gap-32'>
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </section>
    </motion.section>
  )
}
