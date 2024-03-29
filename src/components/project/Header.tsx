'use client'

import Balancer from 'react-wrap-balancer'
import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import type { FeaturedProjectInterface } from '@/lib/types/projects'

const UNDERLINE_STYLES =
  'relative before:h-px before:scale-x-100 before:absolute mb-1 xl:mb-2 before:-bottom-1.5 xl:before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-1000 before:delay-1000 xl:hover:before:delay-0 after:h-px after:absolute after:-bottom-1.5 xl:after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-1000 xl:hover:after:delay-1000'

interface Props {
  project: FeaturedProjectInterface
}

export default function Header({ project }: Props) {
  const t = useScopedI18n('project')
  const { setCursorStatus } = useStore()

  return (
    <header className='flex flex-col min-h-screen gap-y-20 xl:gap-y-36 pt-44 pb-36'>
      <HeadlineMarquee
        className='text-6xl text-kili-white xl:text-10xl'
        baseVelocity={-3}
      >
        {project.name}
      </HeadlineMarquee>
      <div className='flex flex-col items-start xl:w-4/6 px-6 gap-y-6 xl:px-40 xl:gap-y-36'>
        <p className='text-2xl xl:text-4xl leading-tight text-kili-white'>
          <Balancer>{project.headerDescription}</Balancer>
        </p>
        <a
          className={`flex items-center gap-3 text-2xl xl:text-4xl text-kili-white before:bg-kili-white after:bg-kili-white ${UNDERLINE_STYLES}`}
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          {t('visitButton')}
          <ArrowCornerIcon className='w-4 h-4' />
        </a>
      </div>
    </header>
  )
}
