import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Balancer from 'react-wrap-balancer'
import OtherProjectImage from '@/components/projects/OtherProjectImage'
import OtherProjectVisitButton from '@/components/projects/OtherProjectVisitButton'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import toListPosition from '@/lib/utils/toListPosition'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import { HR_LINE_VARIANTS } from '@/lib/constants/variants'
import { OTHER_PROJECT_UNDERLINE_STYLES } from '@/lib/constants/styles'
import {
  ITEM_REVEAL_ROTATION,
  NO_DELAY,
  OTHER_PROJECT_STAGGER,
  REVEAL_TRANSITION,
  REVEALED_STATE
} from '@/lib/constants/animation'
import type { OtherProjectInterface } from '@/lib/types/projects'

interface Props {
  project: OtherProjectInterface
  index: number
}

export default function OtherProject({ project, index }: Props) {
  const { setCursorStatus } = useStore()
  const projectRef = useRef<HTMLAnchorElement>(null)
  const projectIsInView = useInView(projectRef, { once: true })
  const { isDesktop } = useMediaQuery()
  const transition = {
    ...REVEAL_TRANSITION,
    delay: isDesktop ? toListPosition(index) * OTHER_PROJECT_STAGGER : NO_DELAY
  }

  return (
    <a
      ref={projectRef}
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => {
        setCursorStatus(CURSOR_STATUS.HIDDEN)
      }}
      onMouseLeave={() => {
        setCursorStatus(CURSOR_STATUS.DEFAULT)
      }}
    >
      <article className='relative flex flex-col items-center xl:flex-row group cursor-none'>
        <section className='order-2 overflow-hidden xl:order-1 xl:flex-1'>
          <motion.div
            className='flex flex-col xl:flex-row gap-4 xl:items-center pt-6 xl:pt-10 pb-6 xl:pb-[42px] xl:gap-10'
            initial={{ y: '110%', rotate: ITEM_REVEAL_ROTATION }}
            animate={projectIsInView && REVEALED_STATE}
            transition={transition}
          >
            <header className='flex flex-col xl:flex-row xl:gap-1.5 xl:items-center xl:w-[30%] xl:flex-wrap'>
              <h4
                className={`relative text-3xl duration-1000 ease-in-out xl:text-xl 2xl:text-2xl text-kili-white ${OTHER_PROJECT_UNDERLINE_STYLES}`}
              >
                {project.name}
              </h4>
              <span className='text-2xl xl:text-xl 2xl:text-2xl text-kili-light-gray'>
                {isDesktop && '—'} {project.role}
              </span>
            </header>
            <p className='flex-1 text-xl xl:text-xl 2xl:text-2xl text-kili-light-gray'>
              <Balancer>{project.description}</Balancer>
            </p>
            <ul className='flex flex-wrap flex-1 gap-2 text-sm text-kili-light-gray'>
              {project.stacks.map((stack, stackIndex) => (
                <li
                  key={stackIndex}
                  className='px-[10px] py-[3px] border rounded-full border-kili-light-gray'
                >
                  {stack}
                </li>
              ))}
            </ul>
            <p className='text-2xl xl:text-xl 2xl:text-2xl text-kili-light-gray'>
              {project.year}
            </p>
          </motion.div>
          <motion.hr
            className='w-full h-0.5 border-kili-light-gray origin-left'
            initial='hidden'
            variants={HR_LINE_VARIANTS}
            animate={projectIsInView ? 'show' : 'hidden'}
            transition={transition}
          />
        </section>
        <OtherProjectImage
          project={project}
          index={index}
          isInView={projectIsInView}
          isDesktop={isDesktop}
          transition={transition}
        />
        <OtherProjectVisitButton isRepository={project.isRepository} />
      </article>
    </a>
  )
}
