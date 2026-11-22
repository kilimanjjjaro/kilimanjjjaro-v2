'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import FeaturedProjectName from '@/components/projects/FeaturedProjectName'
import type { FeaturedProjectInterface } from '@/lib/types/projects'
import { useLenis } from 'lenis/react'
import {
  CLIP_HIDDEN_STATE,
  CLIP_VISIBLE_STATE,
  FADE_IN_STATE,
  FADE_OUT_STATE,
  FEATURED_BACKGROUND_SCROLL_END,
  FEATURED_PROJECT_STAGGER,
  INTRO_TRANSITION,
  NO_DELAY,
  SCROLL_PROGRESS_START,
  TRANSITION,
  VIDEO_FADE_TRANSITION
} from '@/lib/constants/animation'
import { PAGE_SCROLL_DURATION, SCROLL_TOP } from '@/lib/constants/scroll'
import {
  MOBILE_DELAYED_FEATURED_PROJECTS,
  VIDEO_START_TIME
} from '@/lib/constants/projects-ui'
import playVideo from '@/lib/utils/playVideo'
import toListPosition from '@/lib/utils/toListPosition'
import { CursorStatus } from '@/lib/constants/cursor'

interface Props {
  project: FeaturedProjectInterface
  index: number
}

export default function FeaturedProject({ project, index }: Props) {
  const { setCursorStatus } = useStore()
  const projectEl = useRef<HTMLAnchorElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const { isDesktop } = useMediaQuery()
  const projectIsInView = useInView(projectEl, { once: true })
  const videoIsInView = useInView(videoRef, { amount: 'all' })
  const { scrollYProgress } = useScroll()
  const lenis = useLenis()

  const bgPositionY = useTransform(
    scrollYProgress,
    [SCROLL_PROGRESS_START, FEATURED_BACKGROUND_SCROLL_END],
    ['0%', '100%']
  )

  const handleMouseEnter = async () => {
    if (videoRef.current === null) return

    const { backgroundColor } = project

    setIsHovered(project.slug)
    setCursorStatus(CursorStatus.Hidden)
    document.body.style.backgroundColor = backgroundColor

    videoRef.current.currentTime = VIDEO_START_TIME
    await videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current === null) return

    setIsHovered(null)
    setCursorStatus(CursorStatus.Default)
    document.body.style.backgroundColor = ''

    videoRef.current.pause()
  }

  const goToProjectPage = () => {
    lenis?.scrollTo(SCROLL_TOP, { duration: PAGE_SCROLL_DURATION })
    document.body.style.backgroundColor = ''
  }

  useEffect(() => {
    if (isDesktop) return

    if (videoIsInView) {
      playVideo(videoRef.current)
    } else {
      videoRef.current?.pause()
    }
  }, [videoIsInView, isDesktop])

  const shouldDelay = index < MOBILE_DELAYED_FEATURED_PROJECTS && !isDesktop

  return (
    <Link
      ref={projectEl}
      href={`/project/${project.slug}`}
      onClick={goToProjectPage}
      onMouseEnter={() => {
        void handleMouseEnter()
      }}
      onMouseLeave={handleMouseLeave}
    >
      <article className='relative flex flex-col aspect-18/22 group cursor-none'>
        <motion.header
          className='top-0 left-0 p-5 flex items-center xl:absolute w-full h-full bg-size-[135%] xl:group-hover:bg-size-[114%] transition-[background-size] ease-in-out duration-1000'
          style={{
            backgroundImage: `url('${project.presentation.background}')`,
            backgroundPositionY: isDesktop ? bgPositionY : 'center'
          }}
          initial={CLIP_HIDDEN_STATE}
          animate={projectIsInView && CLIP_VISIBLE_STATE}
          transition={{
            ...INTRO_TRANSITION,
            delay: shouldDelay
              ? toListPosition(index) * FEATURED_PROJECT_STAGGER
              : NO_DELAY
          }}
        >
          <motion.div
            className='w-full relative transition-transform duration-1000 ease-in-out scale-100 xl:scale-[.85] aspect-video xl:group-hover:scale-100'
            initial={FADE_OUT_STATE}
            animate={videoIsInView && FADE_IN_STATE}
            transition={VIDEO_FADE_TRANSITION}
          >
            {isDesktop && (
              <Image
                className='absolute object-cover object-center xl:block'
                src={project.presentation.poster}
                alt={project.name}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            )}
            <video
              ref={videoRef}
              className='transition-opacity duration-1000 ease-in-out xl:opacity-0 aspect-video xl:absolute xl:group-hover:opacity-100'
              src={project.presentation.video}
              poster={project.presentation.poster}
              loop
              muted
              autoPlay={!isDesktop}
              playsInline={!isDesktop}
              disableRemotePlayback
            />
          </motion.div>{' '}
        </motion.header>

        <FeaturedProjectName projectSlug={project.slug} isHovered={isHovered}>
          {project.name}
        </FeaturedProjectName>
        <footer className='left-0 mt-2 leading-tight xl:leading-none xl:mt-0 xl:absolute xl:text-xl xl:overflow-hidden top-full text-kili-light-gray xl:text-kili-white'>
          <motion.span
            className='xl:block'
            initial={{
              y: '-105%'
            }}
            animate={
              isDesktop
                ? {
                    y: isHovered === project.slug ? '20%' : '-105%'
                  }
                : {
                    y: '16px'
                  }
            }
            transition={TRANSITION}
          >
            <Balancer>{project.role}</Balancer>
          </motion.span>
        </footer>
      </article>
    </Link>
  )
}
