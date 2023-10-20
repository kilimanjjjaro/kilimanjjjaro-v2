import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { OtherProjectInterface } from '@/lib/interfaces/projects'

const UNDERLINE_STYLES =
  'before:h-0.5 before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left xl:group-hover:before:scale-x-100 before:transition-transform before:ease-in xl:group-hover:before:ease-out before:duration-1000 after:delay-1000 xl:group-hover:before:delay-0 after:h-0.5 after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left after:scale-x-0 xl:group-hover:after:scale-x-100 after:transition-transform after:ease-in xl:group-hover:after:ease-out after:duration-1000 xl:group-hover:after:delay-1000'

interface Props {
  project: OtherProjectInterface
  visitButton: string
}

export default function OtherProject({ project, visitButton }: Props) {
  const { setCursorStatus } = useStore()
  const visitButtonEl = useRef<HTMLHeadingElement>(null)
  const { isDesktop } = useMediaQuery()
  const elementDimensions = useElementDimensions({ ref: visitButtonEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })

  return (
    <a
      key={project.id}
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HIDDEN)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      <article className='relative flex flex-col items-center xl:flex-row group cursor-none'>
        <div className='order-2 overflow-hidden xl:order-1'>
          <motion.div
            className='flex flex-col xl:flex-row gap-4 xl:items-center pt-6 xl:pt-10 pb-6 xl:pb-[42px] xl:gap-10'
            variants={OTHER_PROJECT_VARIANTS}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className='flex flex-col xl:flex-row xl:gap-1.5 xl:items-center xl:w-[30%] xl:flex-wrap'>
              <h4
                className={`relative text-3xl duration-1000 ease-in-out xl:text-2xl text-kili-white ${UNDERLINE_STYLES}`}
              >
                {project.name}
              </h4>
              <span className='text-2xl text-kili-light-gray'>
                {isDesktop && '—'} {project.role}
              </span>
            </div>
            <p className='flex-1 text-xl xl:text-2xl text-kili-light-gray'>
              <Balancer>{project.description}</Balancer>
            </p>
            <div className='flex flex-wrap flex-1 gap-2 text-sm text-kili-light-gray'>
              {project.stacks.map((stack, index) => (
                <span
                  key={index}
                  className='px-[10px] py-[3px] border rounded-full border-kili-light-gray'
                >
                  {stack}
                </span>
              ))}
            </div>
            <p className='text-2xl text-kili-light-gray'>{project.year}</p>
          </motion.div>
          <motion.hr
            className='w-full h-0.5 border-kili-light-gray origin-left'
            variants={OTHER_PROJECT_HR_VARIANTS}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
        {project.image !== undefined && (
          <div
            className={clsx(
              'xl:absolute overflow-hidden mt-8 xl:mt-0 order-1 xl:order-2 right-10 z-10',
              project.id % 2 === 0 ? 'xl:-rotate-3' : 'xl:rotate-3'
            )}
          >
            <motion.span
              className='block'
              initial={
                isDesktop ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 3 }
              }
              animate={{ y: '0%', rotate: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <Image
                className='duration-1000 ease-in-out transition-transform xl:translate-y-[101%] xl:group-hover:translate-y-0'
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                quality={90}
              />
            </motion.span>
          </div>
        )}
        <motion.span
          ref={visitButtonEl}
          className='fixed top-0 left-0 z-10 overflow-hidden pointer-events-none'
          style={{ x, y }}
        >
          <span className='flex items-center gap-3 text-6xl leading-none text-center transition-transform duration-1000 ease-in-out translate-y-[110%] rotate-6 text-kili-white xl:group-hover:translate-y-0 xl:group-hover:rotate-0'>
            {visitButton} <ArrowCornerIcon className='w-6' />
          </span>
        </motion.span>
      </article>
    </a>
  )
}
