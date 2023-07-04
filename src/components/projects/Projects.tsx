import clsx from 'clsx'
import Paragraph from '@/components/projects/Paragraph'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import FeaturedProject from '@/components/projects/FeaturedProject'
import OtherProjects from '@/components/projects/OtherProjects'
import { PROJECTS } from '@/constants/projects'

export default function Projects() {
  return (
    <section className='pt-32 bg-kili-dark-gray' id='projects'>
      <ParallaxHeadline
        className='leading-none uppercase text-kili-white text-10xl'
        baseVelocity={-2}
      >
        Projects
      </ParallaxHeadline>
      <section className='px-40 mt-32'>
        <Paragraph />
        <div className='grid justify-center grid-cols-2 gap-x-[20vw] mt-36 back'>
          {PROJECTS.filter((project) => project.featured).map((project) => (
            <FeaturedProject
              className={clsx(project.id % 2 === 0 && 'mt-80')}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
      <OtherProjects />
    </section>
  )
}
