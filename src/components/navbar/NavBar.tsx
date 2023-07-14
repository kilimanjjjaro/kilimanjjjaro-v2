'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import Navigation from '@/components/navbar/Navigation'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import TextLink from '@/components/shared/TextLink'
import useNavBar from '@/hooks/useNavBar'
import { useStore } from '@/store/store'
import {
  NAVBAR_BUTTON_ONE_VARIANTS,
  NAVBAR_BUTTON_TWO_VARIANTS
} from '@/constants/variants'
import { CURSOR_STATUS } from '@/constants/general'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus, setCursorStatus } = useStore()
  const { isVisible } = useNavBar()

  return (
    <motion.header
      className='relative z-30'
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 3,
        ease: 'easeIn',
        delay: 5.5
      }}
    >
      <Navigation />
      <TextLink
        className={clsx(
          'fixed left-8 top-12 leading-none tracking-wide duration-700 ease-in-out text-kili-light-gray hover:text-kili-white',
          !isVisible && '-translate-y-16'
        )}
        href='/#'
      >
        Kilimanjjjaro
      </TextLink>
      <div
        className={clsx(
          'fixed flex items-center gap-8 right-8 top-12 leading-none tracking-wide duration-700 ease-in-out',
          !isVisible && '-translate-y-16'
        )}
      >
        <LanguageSelector />
        <button
          className='flex flex-col gap-2 cursor-pointer group'
          onClick={() => setNavBarStatus(!navBarStatus)}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          aria-label='Toggle navigation menu'
        >
          <motion.div
            className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-700 group-hover:bg-kili-white'
            variants={NAVBAR_BUTTON_ONE_VARIANTS}
            animate={navBarStatus ? 'open' : 'closed'}
            transition={{
              duration: 0.7,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-700 group-hover:bg-kili-white'
            variants={NAVBAR_BUTTON_TWO_VARIANTS}
            animate={navBarStatus ? 'open' : 'closed'}
            transition={{
              duration: 0.7,
              ease: 'easeInOut'
            }}
          />
        </button>
      </div>
    </motion.header>
  )
}
