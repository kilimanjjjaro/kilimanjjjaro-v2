'use client'

import { motion } from 'framer-motion'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { useScopedI18n } from '@/lib/i18n/client'
import type { FeaturedProjectInterface } from '@/lib/interfaces/projects'

interface Props {
  project: FeaturedProjectInterface
}

export default function Header({ project }: Props) {
  const t = useScopedI18n('project')

  return (
    <header className='flex flex-col min-h-screen gap-y-36 pt-44 pb-36'>
      <ParallaxHeadline className='text-kili-white text-10xl' baseVelocity={-3}>
        {project.name}
      </ParallaxHeadline>
      <div className='flex flex-col items-start w-4/6 px-40 gap-y-36'>
        <p className='text-4xl leading-tight text-kili-white text-balance'>
          {project.headerDescription}
        </p>
        <a
          className='text-4xl text-kili-white before:bg-kili-white after:bg-kili-white relative before:h-[1px] before:scale-x-100 mb-2 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-700 before:delay-700 xl:hover:before:delay-0 after:h-[1px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-700 xl:hover:after:delay-700 overflow-hidden'
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.span
            className='flex items-center gap-3'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          >
            {t('visitButton')}
            <ArrowCornerIcon className='w-4 h-4' />
          </motion.span>
        </a>
      </div>
    </header>
  )
}
