'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from '@/components/introducing/SkillIcons'
import useSkillsCarousel from '@/hooks/useSkillsCarousel'
import useCursorPosition from '@/hooks/useCursorPosition'
import useElementDimensions from '@/hooks/useElementDimensions'
import { useStore } from '@/store/store'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@/icons/ArrowLongLeftIcon'
import { CURSOR_STATUS } from '@/constants/general'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function SkillsCarousel() {
  const { setCursorStatus, setSwiperInstance } = useStore()
  const arrowEl = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const elementDimensions = useElementDimensions({ ref: arrowEl })
  const { x, y } = useCursorPosition({
    trigger: isHovered,
    translateX: elementDimensions.width / 2,
    translateY: elementDimensions.height / 2
  })
  const { isNextArrow, sectionEl, handleMouseMove, handleChange, handleClick } =
    useSkillsCarousel()

  const handleMouse = (boolean: boolean) => {
    setIsHovered(boolean)
    setCursorStatus(boolean ? CURSOR_STATUS.HIDDEN : CURSOR_STATUS.DEFAULT)
  }

  return (
    <div
      ref={sectionEl}
      className='relative px-40 cursor-none'
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      onClick={handleClick}
    >
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={handleChange}
        slidesPerView='auto'
        spaceBetween={144}
        speed={700}
      >
        <SwiperSlide className='group'>
          <Icons.ReactIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            React
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.AstroIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Astro
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NextJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Next.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.SvelteIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Svelte
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.QwikIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Qwik
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.VueIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Vue
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NuxtIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Nuxt
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TailwindCssIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Tailwind CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TypeScriptIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            TypeScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.JavaScriptIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            JavaScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.HtmlIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            HTML
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.CssIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NodeJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Node.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ExpressIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Express
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NestJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Nest.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FirebaseIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Firebase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.SupabaseIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Supabase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.MongoDbIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            MongoDB
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PlaywrightIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Playwright
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FigmaIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Figma
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.XdIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            XD
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.WordPressIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            WordPress
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ElementorIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Elementor
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.IllustratorIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Illustrator
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PhotoshopIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 transition-opacity'
          >
            Photoshop
          </div>
        </SwiperSlide>
      </Swiper>
      <motion.div
        ref={arrowEl}
        className='fixed top-0 left-0 z-10 scale-0 opacity-0 pointer-events-none'
        style={{ x, y }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut'
        }}
      >
        {isNextArrow && <ArrowLongRightIcon className='w-32 fill-kili-white' />}
        {!isNextArrow && <ArrowLongLeftIcon className='w-32 fill-kili-white' />}
      </motion.div>
    </div>
  )
}
