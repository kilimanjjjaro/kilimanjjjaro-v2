import { setStaticParamsLocale } from 'next-international/server'
import Header from '@/components/project/Header'
import Grid from '@/components/project/Grid'
import OtherProjects from '@/components/project/OtherProjects'
import { getScopedI18n } from '@/lib/i18n/server'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import { LOCALES } from '@/lib/constants/globals'
import type { Metadata } from 'next'
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/lib/constants/seo'

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export default async function Project(props: Props) {
  const params = await props.params
  setStaticParamsLocale(params.locale)
  const t = await getScopedI18n('project')

  const projects =
    params.locale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  const project = projects.find((project) => project.slug === params.slug)

  const otherProjects = projects.filter(
    (project) => project.slug !== params.slug
  )

  if (project === undefined) {
    return (
      <main className='flex items-center justify-center w-full h-screen leading-none text-8xl text-kili-white'>
        {t('notFoundMessage')}
      </main>
    )
  }

  return (
    <main className='bg-kili-dark-gray'>
      <Header project={project} />
      <Grid project={project} />
      <OtherProjects projects={otherProjects} />
    </main>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  setStaticParamsLocale(params.locale)
  const featuredProjects =
    params.locale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es
  const project = featuredProjects.find(
    (project) => project.slug === params.slug
  )

  const t = await getScopedI18n('project')

  if (project === undefined)
    return {
      title: t('notFoundMessage'),
      description: t('notFoundMessage')
    }

  return {
    title: project.name,
    description: project.headerDescription,
    keywords: `${project.name}, ${project.stacks.join(', ')}`,
    openGraph: {
      title: project.name,
      description: project.headerDescription,
      images: [
        {
          url: `/images/projects/${project.slug}/og-image.jpg`,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT
        }
      ],
      siteName: 'Kilimanjjjaro',
      type: 'website',
      url: `https://kilimanjjjaro.com/project/${project.slug}`
    }
  }
}
