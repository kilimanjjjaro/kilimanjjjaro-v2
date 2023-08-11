import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import type { Metadata } from 'next'
import Header from '@/components/project/Header'
import { FEATURED_PROJECTS } from '@/constants/projects'

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
    keywords: `${project.name}, ${project.stacks.join(', ')}`
  }
}

export default function Project({ params }: Props) {
  const project = FEATURED_PROJECTS.find(
    (project) => project.slug === params.slug
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
      <Header
        name={project.name}
        description={project.headerDescription}
        link={project.link}
      />
      <section className='grid grid-cols-3 px-40 pb-36 gap-36'>
        <video
          className='col-span-3'
          src={project.presentation.heroVideo}
          autoPlay
          playsInline
          loop
          muted
        />
        <Image src={project.gallery[0]} width={824} height={1508} alt='' />
        <video src={project.gallery[1]} autoPlay playsInline loop muted />
        <div className='flex flex-col gap-36'>
          <div>
            <p className='text-4xl leading-tight text-kili-white'>
              <Balancer>{project.sectionDescription}</Balancer>
            </p>
          </div>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
              Stacks
            </h3>
            <ul className='flex flex-wrap flex-1 gap-4'>
              {project.stacks.map((stack, index) => (
                <li
                  key={index}
                  className='px-5 pt-2 pb-[7px] text-4xl border-2 rounded-full text-kili-white border-kili-light-gray'
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <video
          className='col-span-3'
          src={project.gallery[3]}
          autoPlay
          playsInline
          loop
          muted
        />
        <div className='flex flex-col gap-36'>
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
        </div>
        <video src={project.gallery[5]} autoPlay playsInline loop muted />
        <Image
          src={project.gallery[6]}
          width={824}
          height={1508}
          alt={project.name}
        />
      </section>
    </main>
  )
}
