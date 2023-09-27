// 'use client'

import Balancer from 'react-wrap-balancer'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { ArrowCornerIcon } from '@/icons/ArrowCornerIcon'
import type { FeaturedProjectInterface } from '@/lib/interfaces/general'

interface Props {
  project: FeaturedProjectInterface
}

export default function Header({ project }: Props) {
  return (
    <header className='flex flex-col min-h-screen gap-y-36 pt-44 pb-36'>
      <ParallaxHeadline
        className='leading-none text-kili-white text-10xl'
        baseVelocity={-3}
      >
        {project.name}
      </ParallaxHeadline>
      <div className='flex flex-col items-start w-4/6 px-40 gap-y-36'>
        <p className='text-4xl leading-tight text-kili-white'>
          <Balancer>{project.headerDescription}</Balancer>
        </p>
        <a
          className='flex items-center gap-3 text-4xl text-kili-white before:bg-kili-white after:bg-kili-white relative before:h-[1px] before:scale-x-100 mb-2 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right hover:before:scale-x-0 before:transition-transform before:ease-in hover:before:ease-out before:duration-700 before:delay-700 hover:before:delay-0 after:h-[1px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-700 hover:after:delay-700'
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Launch
          <ArrowCornerIcon className='w-4 h-4' />
        </a>
      </div>
    </header>
  )
}
