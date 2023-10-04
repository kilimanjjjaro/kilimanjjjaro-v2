import { setStaticParamsLocale } from 'next-international/server'
import Header from '@/components/project/Header'
import Grid from '@/components/project/Grid'
import OtherProjects from '@/components/project/OtherProjects'
import { getScopedI18n } from '@/lib/locales/server'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string; locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const featuredProjects =
    params.locale === 'en' ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es
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
          url: project.presentation.poster,
          width: 1000,
          height: 627
        }
      ],
      siteName: 'Kilimanjjjaro',
      type: 'website',
      url: `https://kilimanjjjaro.com/project/${project.slug}`
    }
  }
}

export default async function Project({ params }: Props) {
  const t = await getScopedI18n('project')
  setStaticParamsLocale(params.locale)

  const projects =
    params.locale === 'en' ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

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