'use client'

import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import Link from 'next/link'
import { FeaturedProjectInterface } from '@/lib/interfaces/projects'

export default function MoreProjects({
  projects
}: {
  projects: FeaturedProjectInterface[]
}) {
  const { setCursorStatus } = useStore()

  return (
    <section className='flex flex-wrap gap-20 px-40 pb-36'>
      {projects.map((project) => (
        <h3
          key={project.id}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <Link
            className='relative flex items-center justify-center h-48 leading-none transition-colors duration-700 ease-in-out border-8 rounded-full px-14 text-8xl text-kili-white border-kili-light-gray hover:border-kili-white group'
            href={`/project/${project.slug}`}
          >
            {project.name}
            <div className='absolute w-[450px] overflow-hidden pointer-events-none'>
              <video
                className='transition-transform duration-700 ease-in-out translate-y-[109%] rotate-6 group-hover:translate-y-0 group-hover:rotate-0'
                src={project.presentation.video}
                autoPlay
                playsInline
                loop
                muted
              />
            </div>
          </Link>
        </h3>
      ))}
    </section>
  )
}
