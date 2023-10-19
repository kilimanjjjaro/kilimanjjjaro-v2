'use client'

import Balancer from 'react-wrap-balancer'
import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { CURSOR_STATUS, UNDERLINED_STYLES } from '@/lib/constants/general'
import type { FeaturedProjectInterface } from '@/lib/interfaces/projects'

interface Props {
  project: FeaturedProjectInterface
}

export default function Header({ project }: Props) {
  const t = useScopedI18n('project')
  const { setCursorStatus } = useStore()

  return (
    <header className='flex flex-col min-h-screen gap-y-36 pt-44 pb-36'>
      <HeadlineMarquee className='text-kili-white text-10xl' baseVelocity={-3}>
        {project.name}
      </HeadlineMarquee>
      <div className='flex flex-col items-start w-4/6 px-40 gap-y-36'>
        <p className='text-4xl leading-tight text-kili-white'>
          <Balancer>{project.headerDescription}</Balancer>
        </p>
        <a
          className={`flex items-center gap-3 text-4xl text-kili-white before:bg-kili-white after:bg-kili-white ${UNDERLINED_STYLES}`}
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
