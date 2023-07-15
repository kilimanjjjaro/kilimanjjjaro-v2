'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import clsx from 'clsx'
import { useStore } from '@/store/store'
import FeaturedProjectName from '@/components/projects/FeaturedProjectName'
import type { ProjectInterface } from '@/interfaces/general'
import { CURSOR_STATUS } from '@/constants/general'

export default function FeaturedProject({
  className,
  project
}: {
  className?: string
  project: ProjectInterface
}) {
  const { setCursorStatus } = useStore()
  const projectEl = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const isInView = useInView(projectEl, { once: true })

  const handleMouseEnter = () => {
    const sectionEl = document.getElementById('projects')

    if (sectionEl === null) return

    setIsHovered(project.id)
    setCursorStatus(CURSOR_STATUS.HIDDEN)
    sectionEl.style.backgroundColor = project.backgroundColor
  }

  const handleMouseLeave = () => {
    const sectionEl = document.getElementById('projects')

    if (sectionEl === null) return

    setIsHovered(null)
    setCursorStatus(CURSOR_STATUS.DEFAULT)
    sectionEl.style.backgroundColor = ''
  }

  return (
    <article
      ref={projectEl}
      className={clsx(
        'relative flex justify-center items-center aspect-[18/25] p-5 group cursor-none',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className='top-0 left-0 absolute w-full h-full bg-center bg-[length:125%] group-hover:bg-[length:112%] ease-in-out duration-700'
        style={{ backgroundImage: `url('${project.images.background}')` }}
        initial={{
          clipPath: 'inset(100% 0% 0% 0%)'
        }}
        animate={
          isInView && {
            clipPath: 'inset(0% 0% 0% 0%)'
          }
        }
        transition={{
          duration: 2.5,
          ease: [0.17, 0.84, 0.44, 1]
        }}
      />
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={
          isInView && {
            opacity: 1
          }
        }
        transition={{
          duration: 2,
          ease: 'easeInOut',
          delay: 0.5
        }}
      >
        <Image
          className='w-full h-auto transition-transform duration-700 ease-in-out scale-90 aspect-video group-hover:scale-100'
          src={project.images.poster}
          alt={project.name}
          width={640}
          height={360}
          quality={90}
        />
      </motion.div>
      <FeaturedProjectName projectId={project.id} isHovered={isHovered}>
        {project.name}
      </FeaturedProjectName>
      <span className='absolute right-0 overflow-hidden text-xl leading-none top-full text-kili-white'>
        <motion.span
          className='block pt-4'
          initial={{
            y: '-105%'
          }}
          animate={{
            y: isHovered === project.id ? '0%' : '-105%'
          }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut'
          }}
        >
          {project.role}
        </motion.span>
      </span>
    </article>
  )
}
