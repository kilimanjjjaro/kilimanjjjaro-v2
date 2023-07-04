'use client'

import Flicking from '@egjs/react-flicking'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@/icons/ArrowLongLeftIcon'
import useSkillsCarousel from '@/hooks/useSkillsCarousel'
import * as Icons from '@/components/introducing/SkillIcons'

export default function SkillsCarousel() {
  const {
    isHovered,
    setIsHovered,
    cursorPosition,
    isNextArrow,
    sectionElRef,
    flickeringElRef,
    handleMouseMove,
    handleChange,
    handleClick
  } = useSkillsCarousel()

  return (
    <div
      className={clsx('relative px-40', isHovered && 'cursor-none')}
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={async () => await handleClick()}
      ref={sectionElRef}
    >
      <motion.div
        className='absolute z-10 pointer-events-none will-change-transform'
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        {isNextArrow && <ArrowLongRightIcon className='w-32 fill-kili-white' />}
        {!isNextArrow && <ArrowLongLeftIcon className='w-32 fill-kili-white' />}
      </motion.div>
      <Flicking
        ref={flickeringElRef}
        onChanged={handleChange}
        align='prev'
        cameraClass='flex'
        duration={250}
        bound
      >
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ReactIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            React
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.AstroIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Astro
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NextJsIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Next.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.SvelteIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Svelte
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.QwikIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Qwik
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.VueIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Vue
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NuxtIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Nuxt
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.TailwindCssIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Tailwind CSS
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.TypeScriptIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            TypeScript
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.JavaScriptIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            JavaScript
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.HtmlIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            HTML
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.CssIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            CSS
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NodeJsIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Node.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ExpressIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Express
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.NestJsIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Nest.js
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.FirebaseIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Firebase
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.SupabaseIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Supabase
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.MongoDbIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            MongoDB
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.PlaywrightIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Playwright
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.FigmaIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Figma
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.XdIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            XD
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.WordPressIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            WordPress
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.ElementorIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Elementor
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.IllustratorIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Illustrator
          </div>
        </div>
        <div className='flex flex-col items-center mr-36 group'>
          <Icons.PhotoshopIcon />
          <div className='invisible px-3 pt-[10px] pb-2 mt-8 leading-none duration-500 ease-in-out rounded-full opacity-0 bg-kili-light-gray group-hover:opacity-100 group-hover:visible'>
            Photoshop
          </div>
        </div>
      </Flicking>
    </div>
  )
}
