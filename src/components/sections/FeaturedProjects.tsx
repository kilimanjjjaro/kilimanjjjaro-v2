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
      className='grid items-start justify-center gap-40 px-6 xl:grid-cols-2 xl:px-40 xl:pb-40 xl:pt-36 gap-y-0 xl:gap-x-56'
    >
      {featuredProjects.map((project) => (
        <FeaturedProject
          className={clsx(project.id % 2 === 0 && 'xl:mt-56')}
          key={project.id}
          project={project}
        />
      ))}
    </section>
  )
}
