import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import { useScopedI18n } from '@/lib/i18n/client'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import { HR_LINE_VARIANTS } from '@/lib/constants/variants'
import type { OtherProjectInterface } from '@/lib/types/projects'

const UNDERLINE_STYLES =
  'before:h-0.5 before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left xl:group-hover:before:scale-x-100 before:transition-transform before:ease-in xl:group-hover:before:ease-out before:duration-1000 after:delay-1000 xl:group-hover:before:delay-0 after:h-0.5 after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left after:scale-x-0 xl:group-hover:after:scale-x-100 after:transition-transform after:ease-in xl:group-hover:after:ease-out after:duration-1000 xl:group-hover:after:delay-1000'

interface Props {
  project: OtherProjectInterface
}

export default function OtherProject({ project }: Props) {
  const t = useScopedI18n('home.otherProjects')
  const { setCursorStatus } = useStore()
  const projectRef = useRef<HTMLAnchorElement>(null)
  const visitButtonEl = useRef<HTMLHeadingElement>(null)
  const projectIsInView = useInView(projectRef, { once: true })
  const { isDesktop } = useMediaQuery()
  const elementDimensions = useElementDimensions({ ref: visitButtonEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })

  return (
    <a
      ref={projectRef}
      key={project.id}
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HIDDEN)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      <article className='relative flex flex-col items-center xl:flex-row group cursor-none'>
        <section className='order-2 overflow-hidden xl:order-1'>
          <motion.div
            className='flex flex-col xl:flex-row gap-4 xl:items-center pt-6 xl:pt-10 pb-6 xl:pb-[42px] xl:gap-10'
            initial={{ y: '110%', rotate: 3 }}
            animate={projectIsInView && { y: '0%', rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: isDesktop ? project.id * 0.3 : 0
            }}
          >
            <header className='flex flex-col xl:flex-row xl:gap-1.5 xl:items-center xl:w-[30%] xl:flex-wrap'>
              <h4
                className={`relative text-3xl duration-1000 ease-in-out xl:text-xl 2xl:text-2xl text-kili-white ${UNDERLINE_STYLES}`}
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
              {project.stacks.map((stack, index) => (
                <li
                  key={index}
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
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: isDesktop ? project.id * 0.3 : 0
            }}
          />
        </section>
        <div
          className={clsx(
            'xl:absolute overflow-hidden mt-8 xl:mt-0 order-1 xl:order-2 right-10 z-10',
            project.id % 2 === 0 ? 'xl:-rotate-3' : 'xl:rotate-3'
          )}
        >
          <motion.div
            initial={{
              y: isDesktop ? '0%' : '107%',
              rotate: isDesktop ? 0 : 3
            }}
            animate={projectIsInView && { y: '0%', rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: isDesktop ? project.id * 0.3 : 0
            }}
          >
            <Image
              className={clsx(
                'block transition-transform duration-1000 ease-in-out xl:translate-y-[105%] xl:group-hover:translate-y-0',
                project.isRepository ? 'aspect-[420/210]' : 'aspect-[420/264]'
              )}
              src={project.image}
              alt={`Image of ${project.name}`}
              width={project.isRepository ? 420 : 420}
              height={project.isRepository ? 210 : 264}
              priority
            />
          </motion.div>
        </div>
        <motion.div
          role='tooltip'
          ref={visitButtonEl}
          className='fixed top-0 left-0 z-10 flex justify-center w-full overflow-hidden pointer-events-none'
          style={{ x, y }}
        >
          <span className='flex items-center gap-3 text-6xl leading-none text-center transition-transform duration-1000 ease-in-out translate-y-[124%] rotate-6 text-kili-white xl:group-hover:translate-y-0 xl:group-hover:rotate-0'>
            {project.isRepository ? t('repositoryButton') : t('websiteButton')}{' '}
            <ArrowCornerIcon className='w-6' />
          </span>
        </motion.div>
      </article>
    </a>
  )
}
