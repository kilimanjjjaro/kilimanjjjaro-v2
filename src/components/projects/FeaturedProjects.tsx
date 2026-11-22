'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from 'lenis/react'
import FeaturedProject from '@/components/projects/FeaturedProject'
import YourIdea from '@/components/projects/YourIdea'
import type { FeaturedProjectInterface } from '@/lib/types/projects'
import { FEATURED_CAROUSEL_BREAKPOINTS } from '@/lib/constants/carousel'

interface Props {
  projects: FeaturedProjectInterface[]
}

export default function FeaturedProjects({ projects }: Props) {
  const lenis = useLenis()

  return (
    <Swiper
      tag='section'
      className='featured-projects-carousel'
      onSlideChangeTransitionStart={() => lenis?.stop()}
      onSlideChangeTransitionEnd={() => lenis?.start()}
      slidesPerView='auto'
      spaceBetween={24}
      speed={300}
      centeredSlides
      centeredSlidesBounds
      edgeSwipeDetection='prevent'
      touchEventsTarget='container'
      breakpoints={FEATURED_CAROUSEL_BREAKPOINTS}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={project.slug}>
          <FeaturedProject project={project} index={index} />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <YourIdea />
      </SwiperSlide>
    </Swiper>
  )
}
