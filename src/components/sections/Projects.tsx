'use client'

import { useMemo } from 'react'
import { useCurrentLocale } from '@lib/i18n/client'
import { LOCALES } from '@lib/constants/general'
import { FEATURED_PROJECTS } from '@lib/constants/projects'
import Paragraph from '@components/projects/Paragraph'
import Headline from '@components/projects/Headline'
import FeaturedProject from '@components/projects/FeaturedProject'
import Button from '@components/projects/Button'

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
      className='flex flex-col items-start bg-monospace-black px-36 py-48'
    >
      <Headline />
      <Paragraph />
      <section className='mb-10 grid w-full grid-cols-2 gap-20'>
        {projects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </section>
      <Button />
    </section>
  )
}
