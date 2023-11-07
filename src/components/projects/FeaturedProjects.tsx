'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from '@studio-freight/react-lenis'
import FeaturedProject from '@/components/projects/FeaturedProject'
import type { FeaturedProjectInterface } from '@/lib/types/projects'

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
      breakpoints={{
        1280: {
          enabled: false,
          slidesPerView: 2,
          spaceBetween: 0
        }
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={project.id}>
          <FeaturedProject project={project} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
