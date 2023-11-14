import FeaturedProjects from '@/components/projects/FeaturedProjects'
import OtherProjects from '@/components/projects/OtherProjects'
import { LOCALES } from '@/lib/constants/general'
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '@/lib/constants/projects'
import { getCurrentLocale } from '@/lib/i18n/server'

export default async function Projects() {
  const currentLocale = await getCurrentLocale()

  const featuredProjects =
    currentLocale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  const otherProjects =
    currentLocale === LOCALES.en ? OTHER_PROJECTS.en : OTHER_PROJECTS.es

  return (
    <section id='projects'>
      <FeaturedProjects projects={featuredProjects} />
      {/* <OtherProjects projects={otherProjects} /> */}
    </section>
  )
}
