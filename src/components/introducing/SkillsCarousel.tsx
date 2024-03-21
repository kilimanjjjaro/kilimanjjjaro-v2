'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from '@studio-freight/react-lenis'
import * as Icons from '@/components/introducing/SkillIcons'
import useSkillsCarousel from '@/lib/hooks/useSkillsCarousel'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import { useStore } from '@/lib/store/store'
import { ArrowLongRightIcon } from '@/components/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@/components/icons/ArrowLongLeftIcon'
import { CURSOR_STATUS } from '@/lib/constants/globals'

import 'swiper/css'
import useMediaQuery from '@/lib/hooks/useMediaQuery'

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
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis(() => {})

  const handleMouse = (boolean: boolean) => {
    setIsHovered(boolean)
    setCursorStatus(boolean ? CURSOR_STATUS.HIDDEN : CURSOR_STATUS.DEFAULT)
  }

  const handleSlideChangeStart = () => isDesktop ?? lenis?.stop()
  const handleSlideChangeEnd = () => isDesktop ?? lenis?.start()

  return (
    <div
      ref={sectionEl}
      className='relative px-[26px] cursor-none xl:px-20 2xl:px-40'
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      onClick={handleClick}
    >
      <Swiper
        className='skills-carousel'
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={handleChange}
        onSlideChangeTransitionStart={handleSlideChangeStart}
        onSlideChangeTransitionEnd={handleSlideChangeEnd}
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
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            React
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.AstroIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Astro
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NextJsIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Next.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.QwikIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Qwik
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.VueIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Vue
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NuxtIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Nuxt
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TailwindCssIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Tailwind CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.TypeScriptIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            TypeScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.JavaScriptIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            JavaScript
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.HtmlIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            HTML
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.CssIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            CSS
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.NodeJsIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Node.js
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ExpressIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Express
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FirebaseIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Firebase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.SupabaseIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Supabase
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.MongoDbIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            MongoDB
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PlaywrightIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Playwright
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.FigmaIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Figma
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.XdIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            XD
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.WordPressIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            WordPress
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.ElementorIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Elementor
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.IllustratorIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Illustrator
          </div>
        </SwiperSlide>
        <SwiperSlide className='group'>
          <Icons.PhotoshopIcon />
          <div
            role='tooltip'
            className='px-3 xl:px-3.5 pt-2 pb-2 xl:pb-1.5 mt-8 text-sm xl:text-base leading-none duration-1000 ease-in-out rounded-full xl:opacity-0 bg-kili-light-gray xl:group-hover:opacity-100 transition-opacity selection:hidden'
          >
            Photoshop
          </div>
        </SwiperSlide>
      </Swiper>
      <motion.div
        ref={arrowEl}
        className='fixed top-0 left-0 z-10 scale-0 pointer-events-none xl:opacity-0 selection:hidden'
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
        {isNextArrow && <ArrowLongRightIcon className='w-32 fill-kili-white' />}
        {!isNextArrow && <ArrowLongLeftIcon className='w-32 fill-kili-white' />}
      </motion.div>
    </div>
  )
}
