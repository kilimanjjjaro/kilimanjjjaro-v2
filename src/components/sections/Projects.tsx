import clsx from 'clsx'
import Paragraph from '@/components/projects/Paragraph'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import FeaturedProject from '@/components/projects/FeaturedProject'
import OtherProjects from '@/components/projects/OtherProjects'
import { FEATURED_PROJECTS } from '@/constants/projects'

export default function Projects() {
  return (
    <section
      id='projects'
      className='pt-32 transition-colors duration-700 ease-in-out bg-kili-dark-gray'
    >
      <ParallaxHeadline
        className='leading-none text-kili-white text-10xl'
        baseVelocity={-3}
      >
        Projects
      </ParallaxHeadline>
      <section className='px-40 my-36'>
        <Paragraph />
        <div className='grid justify-center grid-cols-2 gap-x-[20vw] mt-36'>
          {FEATURED_PROJECTS.map((project) => (
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
