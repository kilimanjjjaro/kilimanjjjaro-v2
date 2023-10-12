import clsx from 'clsx'
import FeaturedProject from '@/components/projects/FeaturedProject'
import { getCurrentLocale } from '@/lib/i18n/server'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import { LOCALES } from '@/lib/constants/general'

export default async function FeaturedProjects() {
  const currentLocale = getCurrentLocale()
  const featuredProjects =
    currentLocale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  return (
    <section
      id='featured-projects'
      className='grid items-start justify-center grid-cols-2 gap-40 px-40 pb-40 pt-36 gap-y-0 gap-x-56'
    >
      {featuredProjects.map((project) => (
        <FeaturedProject
          className={clsx(project.id % 2 === 0 && 'mt-56')}
          key={project.id}
          project={project}
        />
      ))}
    </section>
  )
}
