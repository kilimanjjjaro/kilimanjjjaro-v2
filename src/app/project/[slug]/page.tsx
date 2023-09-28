import type { Metadata } from 'next'
import Header from '@/components/project/Header'
import Grid from '@/components/project/Grid'
import OtherProjects from '@/components/project/OtherProjects'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = FEATURED_PROJECTS.find(
    (project) => project.slug === params.slug
  )

  if (project === undefined)
    return {
      title: 'Project not found',
      description: 'Project not found'
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

export default function Project({ params }: Props) {
  const project = FEATURED_PROJECTS.find(
    (project) => project.slug === params.slug
  )

  const otherProjects = FEATURED_PROJECTS.filter(
    (project) => project.slug !== params.slug
  )

  if (project === undefined) {
    return (
      <main className='flex items-center justify-center w-full h-screen leading-none text-8xl text-kili-white'>
        Project not found
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
