'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import clsx from 'clsx'
import LargeVersion from '@/components/navbar/LargeVersion'
import SmallVersion from '@/components/navbar/SmallVersion'
import useNavbar from '@/lib/hooks/useNavbar'
import { useStore } from '@/lib/store/store'
import {
  FADE_IN_STATE,
  FADE_IN_TRANSITION,
  FADE_OUT_STATE
} from '@/lib/constants/animation'
import { NavbarVersion } from '@/lib/constants/navbar'
import { SCROLL_TOP, SECTION_SCROLL_DURATION } from '@/lib/constants/scroll'
import { CursorStatus } from '@/lib/constants/cursor'

export default function Navbar() {
  const { setCursorStatus } = useStore()
  const { version, isVisible } = useNavbar()
  const lenis = useLenis()
  const pathname = usePathname()

  const handleClick = () => {
    const allowedPaths = ['/', '/en', '/es']

    if (!allowedPaths.includes(pathname)) return

    lenis?.scrollTo(SCROLL_TOP, { duration: SECTION_SCROLL_DURATION })
  }

  return (
    <motion.header
      className={clsx(
        'fixed left-6 h-7 right-6 md:left-8 md:right-8 z-50 top-10 items-center md:top-11 mix-blend-difference flex justify-between transition-transform duration-1000 ease-in-out',
        !isVisible && 'translate-y-[-68px]'
      )}
      initial={{ display: 'none', ...FADE_OUT_STATE }}
      animate={{ display: 'flex', ...FADE_IN_STATE }}
      transition={FADE_IN_TRANSITION}
    >
      <h1
        className={clsx(
          'leading-none mt-0.5 tracking-wide transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
        )}
        onMouseEnter={() => {
          setCursorStatus(CursorStatus.Hover)
        }}
        onMouseLeave={() => {
          setCursorStatus(CursorStatus.Default)
        }}
        onClick={handleClick}
      >
        <Link href='/'>Kilimanjjjaro</Link>
      </h1>
      <AnimatePresence>
        {version === NavbarVersion.Large && <LargeVersion key='large-nav' />}
        {version === NavbarVersion.Small && <SmallVersion key='small-nav' />}
      </AnimatePresence>
    </motion.header>
  )
}
