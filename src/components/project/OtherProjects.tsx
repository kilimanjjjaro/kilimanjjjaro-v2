'use client'

import { useStore } from '@/store/store'
import type { FeaturedProjectInterface } from '@/interfaces/general'
import { FEATURED_PROJECTS } from '@/constants/projects'
import { CURSOR_STATUS } from '@/constants/general'

interface Props {
  project: FeaturedProjectInterface
}

export default function OtherProjects({ project }: Props) {
  const { setCursorStatus } = useStore()
  return (
    <section className='flex gap-20 px-40 pb-36'>
      {FEATURED_PROJECTS.map((project) => (
        <h3
          key={project.id}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <a
            className='flex items-center justify-center h-48 leading-none capitalize transition-colors duration-700 ease-in-out border-8 rounded-full px-14 text-9xl text-kili-white border-kili-light-gray hover:border-kili-white group'
            href={project.link}
          >
            {project.name}
            <div className='fixed z-10 overflow-hidden bg-transparent pointer-events-none inset-8'>
              <video
                className='absolute bottom-0 right-0 w-1/3 transition-transform duration-700 ease-in-out translate-y-[108%] rotate-6 group-hover:translate-y-0 group-hover:rotate-0'
                src={project.presentation.heroVideo}
                autoPlay
                playsInline
                loop
                muted
              />
            </div>
          </a>
        </h3>
      ))}
    </section>
  )
}
