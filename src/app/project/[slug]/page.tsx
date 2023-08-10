'use client'

import type { Metadata } from 'next'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import TextLink from '@/components/shared/TextLink'
import { ArrowCornerIcon } from '@/icons/ArrowCornerIcon'
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
    <main>
      <header className='flex flex-col h-screen gap-y-36 pt-44'>
        <ParallaxHeadline
          className='leading-none text-kili-white text-10xl'
          baseVelocity={-3}
        >
          {project.name}
        </ParallaxHeadline>
        <div className='flex flex-col items-start w-1/2 px-40 gap-36'>
          <p className='text-4xl leading-tight text-kili-white'>
            {project.description}
          </p>
          <TextLink
            className='flex items-center gap-3 text-4xl text-kili-white before:bg-kili-white after:bg-kili-white'
            href='/#'
            underlined
          >
            Launch
            <ArrowCornerIcon className='w-4 h-4' />
          </TextLink>
        </div>
      </header>
      <section className='grid grid-cols-3 px-40 py-36 gap-36 pb-36 bg-kili-dark-gray'>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Stacks
          </h3>
          <ul className='flex flex-wrap flex-1 gap-2'>
            {project.stacks.map((stack, index) => (
              <li
                key={index}
                className='px-5 py-2 text-4xl border-2 rounded-full text-kili-white border-kili-light-gray'
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Role
          </h3>
          <p className='text-4xl text-kili-white'>{project.role}</p>
        </div>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Year
          </h3>
          <p className='text-4xl text-kili-white'>{project.year}</p>
        </div>
      </section>
    </main>
  )
}
