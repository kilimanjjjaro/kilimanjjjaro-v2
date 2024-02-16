'use client'

import { useMemo } from 'react'
import { useCurrentLocale } from '@lib/i18n/client'
import { LOCALES } from '@lib/constants/general'
import { FEATURED_PROJECTS } from '@lib/constants/projects'
import Paragraph from '@components/projects/Paragraph'
import Headline from '@components/projects/Headline'
import FeaturedProject from '@components/projects/FeaturedProject'

export default function Projects() {
  const currentLocale = useCurrentLocale()

  const projects = useMemo(() => {
    return currentLocale === LOCALES.en
      ? FEATURED_PROJECTS.en
      : FEATURED_PROJECTS.es
  }, [currentLocale])

  return (
    <section
      id='projects'
      className='flex flex-col gap-36 bg-monospace-black p-36'
    >
      <Headline />
      <Paragraph />
      <section className='grid grid-cols-2 gap-20'>
        {projects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
        P
      </section>
    </section>
  )
}
