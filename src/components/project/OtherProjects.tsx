'use client'

import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import Link from 'next/link'
import { FeaturedProjectInterface } from '@/lib/types/projects'

export default function OtherProjects({
  projects
}: {
  projects: FeaturedProjectInterface[]
}) {
  const { setCursorStatus } = useStore()

  return (
    <section className='flex flex-wrap gap-6 px-6 pb-20 xl:gap-20 xl:px-40 xl:pb-36'>
      {projects.map((project) => (
        <h3
          key={project.id}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <Link
            className='relative flex items-center justify-center min-h-20 xl:min-h-48 leading-none transition-colors duration-1000 ease-in-out border-4 xl:border-8 rounded-full px-8 xl:px-14 text-4xl xl:text-8xl text-kili-white border-kili-light-gray xl:hover:border-kili-white group'
            href={`/project/${project.slug}`}
          >
            {project.name}
            <div className='absolute hidden xl:block w-[450px] overflow-hidden pointer-events-none'>
              <video
                className='transition-transform duration-1000 ease-in-out translate-y-[110%] rotate-6 xl:group-hover:translate-y-0 xl:group-hover:rotate-0'
                src={project.presentation.video}
                autoPlay
                playsInline
                loop
                muted
                disableRemotePlayback
              />
            </div>
          </Link>
        </h3>
      ))}
    </section>
  )
}
