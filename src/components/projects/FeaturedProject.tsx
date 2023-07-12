'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import clsx from 'clsx'
import useCursorPosition from '@/hooks/useCursorPosition'
import type { ProjectInterface } from '@/interfaces/general'

export default function FeaturedProject({
  className,
  project
}: {
  className?: string
  project: ProjectInterface
}) {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const projectEl = useRef<HTMLElement>(null)
  const isInView = useInView(projectEl, { once: true })
  const cursorPosition = useCursorPosition({ trigger: isHovered !== null })

  const handleMouseEnter = (project: ProjectInterface | null) => {
    const sectionEl = document.getElementById('projects')

    if (sectionEl === null) return

    if (project !== null) {
      setIsHovered(project.id)
      sectionEl.style.backgroundColor = project.backgroundColor
    } else {
      setIsHovered(null)
      sectionEl.style.backgroundColor = ''
    }
  }

  return (
    <article
      ref={projectEl}
      className={clsx(
        'relative flex justify-center items-center aspect-[18/25] p-5 group',
        className,
        isHovered === project.id && 'cursor-none'
      )}
      onMouseEnter={() => handleMouseEnter(project)}
      onMouseLeave={() => handleMouseEnter(null)}
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
      <motion.h3
        className='fixed top-0 max-w-[640px] left-0 overflow-hidden pointer-events-none will-change-transform '
        style={{
          x: `calc(${cursorPosition.x}px - 50%)`,
          y: `calc(${cursorPosition.y}px - 50%)`
        }}
      >
        <motion.span
          className='block leading-none text-center text-kili-white text-9xl'
          initial={{
            y: '105%'
          }}
          animate={{
            y: isHovered === project.id ? '0%' : '100%'
          }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut'
          }}
        >
          {project.name}
        </motion.span>
      </motion.h3>
      <span className='absolute right-0 mt-4 overflow-hidden text-xl leading-none top-full text-kili-white'>
        <motion.span
          className='block'
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
