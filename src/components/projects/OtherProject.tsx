import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { useStore } from '@/lib/store/store'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { OtherProjectInterface } from '@/lib/interfaces/general'

interface Props {
  project: OtherProjectInterface
}

export default function OtherProject({ project }: Props) {
  const { setCursorStatus } = useStore()

  return (
    <a
      key={project.id}
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      <article className='relative flex items-center group'>
        <div className='overflow-hidden'>
          <motion.div
            className='flex items-center pt-10 pb-[42px] gap-x-10'
            variants={OTHER_PROJECT_VARIANTS}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className='flex gap-[6px] items-center w-[30%] text-2xl flex-wrap'>
              <h4 className='relative duration-700 ease-in-out text-kili-white before:h-[2px] before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left group-hover:before:scale-x-100 before:transition-transform before:ease-in group-hover:before:ease-out before:duration-700 after:delay-700 group-hover:before:delay-0 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:ease-in group-hover:after:ease-out after:duration-700 group-hover:after:delay-700'>
                {project.name}
              </h4>
              <span className='text-kili-light-gray'>— {project.role}</span>
            </div>
            <p className='flex-1 text-2xl text-kili-light-gray'>
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
            className='w-full h-[2px] border-kili-light-gray origin-left'
            variants={OTHER_PROJECT_HR_VARIANTS}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
        {project.image !== undefined && (
          <div
            className={clsx(
              'absolute overflow-hidden right-10 z-10',
              project.id % 2 === 0 ? '-rotate-3' : 'rotate-3'
            )}
          >
            <Image
              className='duration-700 ease-in-out transition-transform translate-y-[101%] group-hover:translate-y-0'
              src={project.image}
              alt={project.name}
              width={400}
              height={250}
              quality={90}
            />
          </div>
        )}
      </article>
    </a>
  )
}
