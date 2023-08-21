'use client'

import { useStore } from '@/store/store'
import { FEATURED_PROJECTS } from '@/constants/projects'
import { CURSOR_STATUS } from '@/constants/general'

export default function OtherProjects() {
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
            className='relative flex items-center justify-center h-48 leading-none transition-colors duration-700 ease-in-out border-8 rounded-full px-14 text-9xl text-kili-white border-kili-light-gray hover:border-kili-white group'
            href={project.link}
          >
            {project.name}
            <div className='absolute w-[500px] overflow-hidden pointer-events-none'>
              <video
                className='transition-transform duration-700 ease-in-out translate-y-[109%] rotate-6 group-hover:translate-y-0 group-hover:rotate-0'
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
