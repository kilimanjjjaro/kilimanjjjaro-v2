'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimate, useInView } from 'framer-motion'
import clsx from 'clsx'
import type { ProjectInterface } from '@/interfaces/general'

export default function Project({
  className,
  project
}: {
  className?: string
  project: ProjectInterface
}) {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const projectRef = useRef<HTMLElement>(null)
  const [scope, animate] = useAnimate()
  const isInView = useInView(projectRef, { once: true })

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (event.currentTarget === null) return

      setCursorPosition({
        x: event.pageX - event.currentTarget.offsetLeft,
        y: event.pageY - event.currentTarget.offsetTop
      })
    },
    []
  )

  useEffect(() => {
    if (isInView) {
      void animate(
        scope.current,
        { opacity: 1 },
        { duration: 0.5, ease: 'easeInOut', delay: 0.7, type: 'tween' }
      )
    }
  }, [isInView, animate, scope])

  return (
    <motion.article
      ref={projectRef}
      className={clsx(
        'relative flex justify-center items-center aspect-[18/25] p-5 group',
        className,
        isHovered === project.id && 'cursor-none'
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(project.id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <motion.div
        className='top-0 left-0 absolute w-full h-full bg-center bg-[length:125%] group-hover:bg-[length:112%] ease-in-out duration-500'
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
          duration: 0.7,
          ease: 'easeOut',
          type: 'tween',
          delay: 0.3
        }}
      />
      <Image
        ref={scope}
        className='w-full h-auto transition-transform duration-500 ease-in-out scale-90 opacity-0 aspect-video group-hover:scale-100 will-change-transform'
        src={project.images.poster}
        alt={project.name}
        width={640}
        height={360}
        quality={90}
      />
      <h4 className='absolute right-0 mt-4 overflow-hidden text-lg font-light leading-none top-full text-kili-white'>
        <motion.span
          className='block'
          initial={{
            y: '-105%'
          }}
          animate={{
            y: isHovered === project.id ? '0%' : '-105%'
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
        >
          {project.role}
        </motion.span>
      </h4>
      <h3
        className='absolute top-0 left-0 overflow-hidden text-center -translate-x-1/2 -translate-y-1/2 pointer-events-none text-9xl text-kili-white group-hover:opacity-100'
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x
        }}
      >
        <motion.span
          className='block'
          initial={{
            y: '105%'
          }}
          animate={{
            y: isHovered === project.id ? '0%' : '105%'
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
        >
          {project.name}
        </motion.span>
      </h3>
    </motion.article>
  )
}
