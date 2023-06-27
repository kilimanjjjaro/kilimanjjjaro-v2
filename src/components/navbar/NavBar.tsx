'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import KilimanjjjaroLogo from '@/components/navbar/KilimanjjjaroLogo'
import useScroll from '@/hooks/useScroll'
import { useStore } from '@/store/store'
import { SECTIONS } from '@/constants/general'
import {
  LOGO_VARIANTS,
  NAVBAR_LI_VARIANTS,
  NAVBAR_VARIANTS
} from '@/constants/variants'
import { useEffect } from 'react'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus } = useStore()
  const { isVisible } = useScroll()

  useEffect(() => {
    if (navBarStatus) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [navBarStatus])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 flex items-center justify-between w-full px-10 pt-10 mix-blend-difference transition-transform duration-400 ease-in-out z-9999',
          isVisible ? 'translate-y-0' : '-translate-y-full',
          navBarStatus && 'translate-y-0'
        )}
      >
        <Link
          className='w-20 ease-in-out text-kilimanjjjaro-light-gray hover:text-kilimanjjjaro-white duration-400'
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
              'w-6 h-[2px] bg-kilimanjjjaro-light-gray group-hover:bg-kilimanjjjaro-white duration-400 ease-in-out',
              navBarStatus && 'rotate-[135deg] translate-y-[3px]'
            )}
          />
          <div
            className={clsx(
              'w-6 h-[2px] bg-kilimanjjjaro-light-gray group-hover:bg-kilimanjjjaro-white duration-400 ease-in-out',
              navBarStatus && '-rotate-[135deg] -translate-y-[7px]'
            )}
          />
        </button>
      </header>
      <motion.nav
        className='fixed top-0 left-0 flex-col items-start justify-center hidden w-full h-full gap-5 px-40 bg-kilimanjjjaro-dark-gray z-9998'
        variants={NAVBAR_VARIANTS}
        animate={navBarStatus ? 'open' : 'closed'}
      >
        {SECTIONS.map((section) => (
          <Link
            className='overflow-hidden leading-tight text-7xl text-kilimanjjjaro-white'
            key={section.id}
            href={`/#${section.id}`}
          >
            <motion.div variants={NAVBAR_LI_VARIANTS}>
              {section.name}
            </motion.div>
          </Link>
        ))}
      </motion.nav>
    </>
  )
}
