'use client'

import Balancer from 'react-wrap-balancer'
import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
import TextLink from '@/components/shared/TextLink'
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
      <HeadlineMarquee className='text-kili-white text-10xl' baseVelocity={-3}>
        {project.name}
      </HeadlineMarquee>
      <div className='flex flex-col items-start w-4/6 px-40 gap-y-36'>
        <p className='text-4xl leading-tight text-kili-white'>
          <Balancer>{project.headerDescription}</Balancer>
        </p>
        <TextLink
          className='flex items-center gap-3 text-4xl text-kili-white before:bg-kili-white after:bg-kili-white'
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          underlined
        >
          {t('visitButton')}
          <ArrowCornerIcon className='w-4 h-4' />
        </TextLink>
      </div>
    </header>
  )
}
