'use client'

import FeaturedProject from '@/components/projects/FeaturedProject'
import type { FeaturedProjectInterface } from '@/lib/types/projects'

interface Props {
  projects: FeaturedProjectInterface[]
}

export default function FeaturedProjects({ projects }: Props) {
  return (
    <>
      {projects.map((project, index) => (
        <FeaturedProject key={project.id} project={project} index={index} />
      ))}
    </>
  )
}
