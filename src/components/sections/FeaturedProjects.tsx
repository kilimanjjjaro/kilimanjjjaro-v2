'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import FeaturedProject from '@/components/projects/FeaturedProject'
import { useCurrentLocale } from '@/lib/i18n/client'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import { LOCALES } from '@/lib/constants/general'

export default function FeaturedProjects() {
  const currentLocale = useCurrentLocale()
  const featuredProjects =
    currentLocale === LOCALES.en ? FEATURED_PROJECTS.en : FEATURED_PROJECTS.es

  return (
    <Swiper
      tag='section'
      id='featured-projects'
      className='featured-projects-carousel'
      slidesPerView='auto'
      spaceBetween={24}
      speed={700}
      centeredSlides
      centeredSlidesBounds
      breakpoints={{
        1280: {
          enabled: false,
          slidesPerView: 2,
          spaceBetween: 0
        }
      }}
    >
      {featuredProjects.map((project) => (
        <SwiperSlide key={project.id}>
          <FeaturedProject project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
