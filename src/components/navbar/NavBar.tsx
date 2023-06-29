'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useStore } from '@/store/store'
import useScroll from '@/hooks/useScroll'
import KilimanjjjaroLogo from '@/components/navbar/KilimanjjjaroLogo'
import Navigation from '@/components/navbar/Navigation'
import { LOGO_VARIANTS } from '@/constants/variants'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus } = useStore()
  const { isVisible } = useScroll()

  useEffect(() => {
    if (navBarStatus) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [navBarStatus])

  return (
    <>
      <motion.header
        className='fixed top-0 left-0 flex items-center justify-between w-full px-8 pt-8 mix-blend-difference z-9999'
        animate={isVisible ? { y: '0%' } : { y: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Link
          className='w-20 duration-500 ease-in-out text-kili-light-gray hover:text-kili-white'
          style={{ clipPath: 'circle(50% at 50% 50%)' }}
          href='/'
        >
          <motion.div
            variants={LOGO_VARIANTS}
            animate={navBarStatus ? 'open' : 'closed'}
          >
            <KilimanjjjaroLogo />
          </motion.div>
        </Link>
        <button
          className='flex flex-col gap-2 cursor-pointer group'
          onClick={setNavBarStatus}
          aria-label='Toggle navigation menu'
        >
          <div
            className={clsx(
              'w-7 h-[2px] bg-kili-light-gray group-hover:bg-kili-white duration-700 ease-kili-ease',
              navBarStatus && 'rotate-[135deg] translate-y-[3px]'
            )}
          />
          <div
            className={clsx(
              'w-7 h-[2px] bg-kili-light-gray group-hover:bg-kili-white duration-700 ease-kili-ease',
              navBarStatus && '-rotate-[135deg] -translate-y-[7px]'
            )}
          />
        </button>
      </motion.header>
      <Navigation />
    </>
  )
}
