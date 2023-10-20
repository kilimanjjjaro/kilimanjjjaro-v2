'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from '@studio-freight/react-lenis'
import FeaturedProject from '@/components/projects/FeaturedProject'
import { useCurrentLocale } from '@/lib/i18n/client'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import { LOCALES } from '@/lib/constants/general'

export default function FeaturedProjects() {
  const currentLocale = useCurrentLocale()
  const lenis = useLenis()

  const featuredProjects =
    currentLocale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  return (
    <Swiper
      tag='section'
      id='featured-projects'
      className='featured-projects-carousel'
      onSlideChangeTransitionStart={() => lenis?.stop()}
      onSlideChangeTransitionEnd={() => lenis?.start()}
      slidesPerView='auto'
      spaceBetween={28}
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
      {featuredProjects.map((project, index) => (
        <SwiperSlide key={project.id}>
          <FeaturedProject project={project} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
