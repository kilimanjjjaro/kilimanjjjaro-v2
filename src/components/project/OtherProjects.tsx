'use client'

import Link from 'next/link'
import type { FeaturedProjectInterface } from '@lib/types/projects'

export default function OtherProjects({
  projects
}: {
  projects: FeaturedProjectInterface[]
}) {
  return (
    <section className='flex flex-wrap gap-20 px-40 pb-36'>
      {projects.map((project) => (
        <h3 key={project.id}>
          <Link
            className='group relative flex h-48 items-center justify-center rounded-full border-8 border-monospace-light-gray px-14 text-8xl leading-none text-monospace-white transition-colors duration-700 ease-in-out xl:hover:border-monospace-white'
            href={`/project/${project.slug}`}
          >
            {project.name}
            <div className='pointer-events-none absolute w-[450px] overflow-hidden'>
              <video
                className='translate-y-[110%] rotate-6 transition-transform duration-700 ease-in-out xl:group-hover:translate-y-0 xl:group-hover:rotate-0'
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
