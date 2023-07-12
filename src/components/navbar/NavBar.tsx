'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import Navigation from '@/components/navbar/Navigation'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import useNavBar from '@/hooks/useNavBar'
import { useStore } from '@/store/store'
import {
  NAVBAR_BUTTON_ONE_VARIANTS,
  NAVBAR_BUTTON_TWO_VARIANTS
} from '@/constants/variants'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus } = useStore()
  const { isVisible } = useNavBar()

  return (
    <motion.header
      className='relative z-40'
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
      <Link
        className={clsx(
          'fixed z-50 left-8 top-12 leading-none tracking-wide duration-700 ease-in-out text-kili-light-gray hover:text-kili-white',
          !isVisible && '-translate-y-16'
        )}
        href='/#'
      >
        <h1>Kilimanjjjaro</h1>
      </Link>
      <div
        className={clsx(
          'fixed z-50 flex items-center gap-8 right-8 top-12 leading-none tracking-wide duration-700 ease-in-out',
          !isVisible && '-translate-y-16'
        )}
      >
        <LanguageSelector />
        <button
          className='flex flex-col gap-2 cursor-pointer group'
          onClick={() => setNavBarStatus(!navBarStatus)}
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
      <Navigation />
    </motion.header>
  )
}
