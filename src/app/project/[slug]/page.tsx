import type { Metadata } from 'next'
import Header from '@/components/project/Header'
import ImageGrid from '@/components/project/ImageGallery'
import Footer from '@/components/project/Footer'
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

export default async function Project({ params }: Props) {
  const project = getProject(params.slug)

  if (project === null) {
    return (
      <main className='flex items-center justify-center w-full h-screen leading-none text-8xl text-kili-white'>
        Project not found
      </main>
    )
  }

  return (
    <main className='bg-kili-dark-gray'>
      <Header
        name={project.name}
        description={project.description}
        link={project.link}
      />
      <ImageGrid
        heroVideo={project.presentation.heroVideo}
        gallery={project.gallery}
        name={project.name}
      />
      <Footer stacks={project.stacks} role={project.role} year={project.year} />
    </main>
  )
}
