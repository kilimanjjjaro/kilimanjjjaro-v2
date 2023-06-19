'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SKILL_ICONS } from '@/constants/skillIcons'

export default function SkillsCarousel() {
  return (
    <Swiper
      className='mt-20 !overflow-visible'
      slidesPerView='auto'
      spaceBetween={150}
    >
      {SKILL_ICONS.map((icon) => (
        <SwiperSlide className='!w-auto' key={icon.id}>
          <div className='relative flex flex-col items-center group'>
            <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
            <div
              role='tooltip'
              className='absolute invisible px-3 py-1 text-sm ease-in-out rounded-full opacity-0 -bottom-12 bg-kilimanjjjaro-light-gray duration-400 group-hover:visible group-hover:opacity-100'
            >
              {icon.name}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
