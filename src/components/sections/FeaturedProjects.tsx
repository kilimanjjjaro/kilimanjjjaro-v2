import clsx from 'clsx'
import FeaturedProject from '@/components/projects/FeaturedProject'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'

export default function FeaturedProjects() {
  return (
    <section
      id='featured-projects'
      className='grid justify-center grid-cols-2 gap-40 px-40 pb-40 gap-y-0 gap-x-56'
    >
      {FEATURED_PROJECTS.map((project) => (
        <FeaturedProject
          className={clsx(project.id % 2 === 0 && 'mt-56')}
          key={project.id}
          project={project}
        />
      ))}
    </section>
  )
}
