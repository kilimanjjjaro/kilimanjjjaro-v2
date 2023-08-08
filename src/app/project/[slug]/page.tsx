import type { Metadata } from 'next'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { FEATURED_PROJECTS } from '@/constants/projects'

interface Props {
  params: { slug: string }
}

const getProject = (slug: string) => {
  return FEATURED_PROJECTS.find((project) => project.slug === slug) ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProject(params.slug)

  return {
    title: product?.name,
    description: product?.description
  }
}

export default function Project({ params }: Props) {
  const project = getProject(params.slug)

  if (project === null) {
    return <div>Project not found</div>
  }

  return (
    <main className='transition-transform duration-[2s] ease-kili-in'>
      <header>
        <ParallaxHeadline
          className='leading-none text-kili-white text-10xl'
          baseVelocity={-3}
        >
          {project.name}
        </ParallaxHeadline>
      </header>
    </main>
  )
}
