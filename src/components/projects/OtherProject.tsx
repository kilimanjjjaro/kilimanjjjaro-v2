import { useRef, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { ArrowCornerIcon } from '@components/icons/ArrowCornerIcon'
import useMediaQuery from '@lib/hooks/useMediaQuery'
import useCursorPosition from '@lib/hooks/useCursorPosition'
import useElementDimensions from '@lib/hooks/useElementDimensions'
import { useScopedI18n } from '@lib/i18n/client'
import { HR_LINE_VARIANTS } from '@lib/constants/variants'
import type { OtherProjectInterface } from '@lib/types/projects'

const UNDERLINE_STYLES =
  'before:h-0.5 before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left xl:group-hover:before:scale-x-100 before:transition-transform before:ease-in xl:group-hover:before:ease-out before:duration-700 after:delay-1000 xl:group-hover:before:delay-0 after:h-0.5 after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-monospace-dark-gray after:origin-left after:scale-x-0 xl:group-hover:after:scale-x-100 after:transition-transform after:ease-in xl:group-hover:after:ease-out after:duration-700 xl:group-hover:after:delay-1000'

interface Props {
  project: OtherProjectInterface
}

export default function OtherProject({ project }: Props) {
  const t = useScopedI18n('home.otherProjects')
  const projectRef = useRef<HTMLAnchorElement>(null)
  const visitButtonEl = useRef<HTMLHeadingElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
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
    >
      <article className='group relative flex cursor-none flex-col items-center xl:flex-row'>
        <section className='order-2 overflow-hidden xl:order-1'>
          <motion.div
            className='flex flex-col gap-4 pb-6 pt-6 xl:flex-row xl:items-center xl:gap-10 xl:pb-[42px] xl:pt-10'
            initial={{ y: '110%', rotate: 3 }}
            animate={projectIsInView && { y: '0%', rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: isDesktop ? project.id * 0.3 : 0
            }}
          >
            <header className='flex flex-col xl:w-[30%] xl:flex-row xl:flex-wrap xl:items-center xl:gap-1.5'>
              <h4
                className={`relative text-3xl text-monospace-white duration-700 ease-in-out xl:text-2xl ${UNDERLINE_STYLES}`}
              >
                {project.name}
              </h4>
              <span className='text-2xl text-monospace-light-gray'>
                {isDesktop && '—'} {project.role}
              </span>
            </header>
            <p className='flex-1 text-xl text-monospace-light-gray xl:text-2xl'>
              <Balancer>{project.description}</Balancer>
            </p>
            <ul className='flex flex-1 flex-wrap gap-2 text-sm text-monospace-light-gray'>
              {project.stacks.map((stack, index) => (
                <li
                  key={index}
                  className='rounded-full border border-monospace-light-gray px-[10px] py-[3px]'
                >
                  {stack}
                </li>
              ))}
            </ul>
            <p className='text-2xl text-monospace-light-gray'>{project.year}</p>
          </motion.div>
          <motion.hr
            className='h-0.5 w-full origin-left border-monospace-light-gray'
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
            'right-10 z-10 order-1 mt-8 overflow-hidden xl:absolute xl:order-2 xl:mt-0',
            project.id % 2 === 0 ? 'xl:-rotate-3' : 'xl:rotate-3'
          )}
        >
          <motion.div
            initial={{
              y: isDesktop ? '0%' : '107%',
              rotate: isDesktop ? 0 : 3
            }}
            animate={
              projectIsInView &&
              isLoaded &&
              !isDesktop && { y: '0%', rotate: 0 }
            }
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: isDesktop ? project.id * 0.3 : 0
            }}
          >
            <Image
              className={clsx(
                'block transition-transform duration-700 ease-in-out xl:translate-y-[105%] xl:group-hover:translate-y-0',
                project.isRepository ? 'aspect-[420/210]' : 'aspect-[420/264]'
              )}
              src={project.image}
              alt={`Image of ${project.name}`}
              width={project.isRepository ? 420 : 420}
              height={project.isRepository ? 210 : 264}
              priority
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </div>
        <motion.div
          role='tooltip'
          ref={visitButtonEl}
          className='pointer-events-none fixed left-0 top-0 z-10 flex w-full justify-center overflow-hidden'
          style={{ x, y }}
        >
          <span className='flex translate-y-[124%] rotate-6 items-center gap-3 text-center text-6xl leading-none text-monospace-white transition-transform duration-700 ease-in-out xl:group-hover:translate-y-0 xl:group-hover:rotate-0'>
            {project.isRepository ? t('repositoryButton') : t('websiteButton')}{' '}
            <ArrowCornerIcon className='w-6' />
          </span>
        </motion.div>
      </article>
    </a>
  )
}
