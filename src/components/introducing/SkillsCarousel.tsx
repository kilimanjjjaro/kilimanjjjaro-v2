'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from '@studio-freight/react-lenis'
import * as Icons from '@components/introducing/SkillIcons'
import useSkillsCarousel from '@lib/hooks/useSkillsCarousel'
import useCursorPosition from '@lib/hooks/useCursorPosition'
import useElementDimensions from '@lib/hooks/useElementDimensions'
import { useStore } from '@lib/store/store'
import { ArrowLongRightIcon } from '@components/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@components/icons/ArrowLongLeftIcon'

import 'swiper/css'

export default function SkillsCarousel() {
  const setSwiperInstance = useStore((state) => state.setSwiperInstance)
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
  const lenis = useLenis()

  return (
    <div
      ref={sectionEl}
      className='relative cursor-none px-[26px] xl:px-40'
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Swiper
        className='skills-carousel'
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={handleChange}
        onSlideChangeTransitionStart={() => lenis?.stop()}
        onSlideChangeTransitionEnd={() => lenis?.start()}
        slidesPerView='auto'
        spaceBetween={56}
        speed={300}
        edgeSwipeDetection='prevent'
        touchEventsTarget='container'
        breakpoints={{
          1280: {
            speed: 700,
            spaceBetween: 144
          }
        }}
      >
        <SwiperSlide className='group'>
          <Icons.ReactIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            React
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.AstroIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Astro
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NextJsIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Next.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.SvelteIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Svelte
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.QwikIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Qwik
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.VueIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Vue
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NuxtIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Nuxt
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TailwindCssIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Tailwind CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TypeScriptIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            TypeScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.JavaScriptIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            JavaScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.HtmlIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            HTML
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.CssIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NodeJsIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Node.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ExpressIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Express
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NestJsIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Nest.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FirebaseIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Firebase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.SupabaseIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Supabase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.MongoDbIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            MongoDB
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PlaywrightIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Playwright
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FigmaIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Figma
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.XdIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            XD
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.WordPressIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            WordPress
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ElementorIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Elementor
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.IllustratorIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Illustrator
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PhotoshopIcon />
          <div
            role='tooltip'
            className='mt-8 rounded-full bg-monospace-light-gray px-3 pb-2 pt-2 text-sm leading-none transition-opacity duration-700 ease-in-out selection:hidden xl:px-3.5 xl:pb-1.5 xl:text-base xl:opacity-0 xl:group-hover:opacity-100'
          >
            Photoshop
          </div>
        </SwiperSlide>
      </Swiper>
      <motion.div
        ref={arrowEl}
        className='pointer-events-none fixed left-0 top-0 z-10 scale-0 selection:hidden xl:opacity-0'
        style={{ x, y }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      >
        {isNextArrow && (
          <ArrowLongRightIcon className='w-32 fill-monospace-white' />
        )}
        {!isNextArrow && (
          <ArrowLongLeftIcon className='w-32 fill-monospace-white' />
        )}
      </motion.div>
    </div>
  )
}
