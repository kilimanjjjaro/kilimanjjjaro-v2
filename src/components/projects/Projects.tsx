import Paragraph from '@/components/projects/Paragraph'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import Project from '@/components/projects/Project'
import { PROJECTS } from '@/constants/projects'
import clsx from 'clsx'

export default function Projects() {
  return (
    <section className='pt-32 pb-36 bg-kili-dark-gray' id='projects'>
      <ParallaxHeadline
        className='text-kili-white text-[180px] leading-none uppercase'
        baseVelocity={-2}
      >
        Projects
      </ParallaxHeadline>
      <section className='px-56 mt-32'>
        <Paragraph />
        <div className='grid justify-center grid-cols-2 gap-x-[20vw] mt-36 back'>
          {PROJECTS.map((project) => (
            <Project
              className={clsx(project.id % 2 === 0 && 'mt-80')}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
