'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import FeaturedProjectName from '@/components/projects/FeaturedProjectName'
import type { FeaturedProjectInterface } from '@/lib/interfaces/projects'
import { CURSOR_STATUS } from '@/lib/constants/general'

interface Props {
  className?: string
  project: FeaturedProjectInterface
}

export default function FeaturedProject({ className, project }: Props) {
  const { setCursorStatus } = useStore()
  const projectEl = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const isInView = useInView(projectEl, { once: true })

  const handleMouseEnter = async () => {
    if (videoRef.current === null) return

    setIsHovered(project.id)
    setCursorStatus(CURSOR_STATUS.HIDDEN)
    document.body.style.backgroundColor = project.backgroundColor

    videoRef.current.currentTime = 1
    await videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current === null) return

    setIsHovered(null)
    setCursorStatus(CURSOR_STATUS.DEFAULT)
    document.body.style.backgroundColor = ''

    videoRef.current.currentTime = 0
    videoRef.current.pause()
  }

  return (
    <Link href={`/project/${project.slug}`}>
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
          className='top-0 left-0 absolute w-full h-full bg-center bg-[length:125%] group-hover:bg-[length:112%] transition-all ease-in-out duration-700'
          style={{
            backgroundImage: `url('${project.presentation.background}')`
          }}
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
          <video
            ref={videoRef}
            className='w-full transition-transform duration-700 ease-in-out scale-[.85] aspect-video group-hover:scale-100'
            src={project.presentation.video}
            poster={project.presentation.poster}
            playsInline
            loop
            muted
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
    </Link>
  )
}
