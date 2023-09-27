'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import Navigation from '@/components/navbar/Navigation'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import useNavBar from '@/lib/hooks/useNavBar'
import { useStore } from '@/lib/store/store'
import {
  NAVBAR_BUTTON_ONE_VARIANTS,
  NAVBAR_BUTTON_TWO_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS } from '@/lib/constants/general'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus, setCursorStatus } = useStore()
  const { isVisible } = useNavBar()

  useEffect(() => {
    const wrapperEl = document.getElementById('page-wrapper')

    if (wrapperEl === null) return

    if (navBarStatus) {
      wrapperEl.classList.add('-translate-y-3')
      wrapperEl.classList.add('scale-[1.3]')
    } else {
      wrapperEl.classList.remove('-translate-y-3')
      wrapperEl.classList.remove('scale-[1.3]')
    }
  }, [navBarStatus])

  return (
    <motion.header
      className='relative'
      initial={{
        display: 'none',
        opacity: 0
      }}
      animate={{
        display: 'block',
        opacity: 1
      }}
      transition={{
        duration: 3,
        ease: 'easeIn',
        delay: 1.3
      }}
    >
      <Navigation />
      <h1
        className={clsx(
          'fixed left-8 top-12 leading-none tracking-wide transition duration-1000 ease-in-out text-kili-light-gray hover:text-kili-white z-40 mix-blend-difference',
          !isVisible && '-translate-y-16'
        )}
      >
        <Link href='/'>Kilimanjjjaro</Link>
      </h1>
      <div
        className={clsx(
          'fixed flex items-center gap-8 right-8 top-12 leading-none transition-transform tracking-wide duration-700 ease-in-out z-40 mix-blend-difference',
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
