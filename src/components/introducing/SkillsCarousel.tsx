'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Flicking from '@egjs/react-flicking'
import * as Icons from '@/components/introducing/SkillIcons'
import useSkillsCarousel from '@/hooks/useSkillsCarousel'
import useCursorPosition from '@/hooks/useCursorPosition'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@/icons/ArrowLongLeftIcon'

export default function SkillsCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorPosition = useCursorPosition({ trigger: isHovered })
  const {
    isNextArrow,
    sectionEl,
    flickeringEl,
    handleMouseMove,
    handleChange,
    handleClick
  } = useSkillsCarousel()

  return (
    <div
      ref={sectionEl}
      className='relative px-40 cursor-none'
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={async () => await handleClick()}
    >
      <motion.div
        className='fixed top-0 left-0 z-10 pointer-events-none'
        style={{
          x: `calc(${cursorPosition.x}px - 50%)`,
          y: `calc(${cursorPosition.y}px - 50%)`
        }}
        initial={{
          scale: 0,
          opacity: 0
        }}
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
      <Flicking
        ref={flickeringEl}
        onChanged={handleChange}
        align='prev'
        cameraClass='flex'
        bound
      >
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ReactIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            React
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.AstroIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Astro
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NextJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Next.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.SvelteIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Svelte
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.QwikIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Qwik
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.VueIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Vue
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NuxtIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Nuxt
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.TailwindCssIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Tailwind CSS
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.TypeScriptIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            TypeScript
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.JavaScriptIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            JavaScript
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.HtmlIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            HTML
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.CssIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            CSS
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NodeJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Node.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ExpressIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Express
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NestJsIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Nest.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.FirebaseIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Firebase
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.SupabaseIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Supabase
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.MongoDbIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            MongoDB
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.PlaywrightIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Playwright
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.FigmaIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Figma
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.XdIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            XD
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.WordPressIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            WordPress
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ElementorIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Elementor
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.IllustratorIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Illustrator
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.PhotoshopIcon />
          <div
            role='tooltip'
            className='px-3 pt-[10px] pb-2 mt-8 leading-none duration-700 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100'
          >
            Photoshop
          </div>
        </div>
      </Flicking>
    </div>
  )
}
