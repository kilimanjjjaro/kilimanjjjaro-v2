'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import LargeVersion from '@/components/navbar/LargeVersion'
import SmallVersion from '@/components/navbar/SmallVersion'
import useNavbar from '@/lib/hooks/useNavbar'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/globals'

export default function Navbar() {
  const { setCursorStatus } = useStore()
  const { version, isVisible } = useNavbar()
  const lenis = useLenis(() => {})
  const pathname = usePathname()

  const handleClick = () => {
    const allowedPaths = ['/', '/en', '/es']

    if (!allowedPaths.includes(pathname)) return

    lenis?.scrollTo(0, { duration: 2 })
  }

  return (
    <motion.header
      className={clsx(
        'fixed left-6 h-7 right-6 md:left-8 md:right-8 z-50 top-10 items-center md:top-11 mix-blend-difference flex justify-between transition-transform duration-1000 ease-in-out',
        !isVisible && '-translate-y-[68px]'
      )}
      initial={{
        display: 'none',
        opacity: 0
      }}
      animate={{
        display: 'flex',
        opacity: 1
      }}
      transition={{
        duration: 2.5,
        ease: 'easeIn',
        delay: 2
      }}
    >
      <h1
        className={clsx(
          'leading-none mt-0.5 tracking-wide transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
        )}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        onClick={handleClick}
      >
        <Link href='/'>Kilimanjjjaro</Link>
      </h1>
      <AnimatePresence>
        {version === 1 && <LargeVersion key='large-nav' />}
        {version === 2 && <SmallVersion key='small-nav' />}
      </AnimatePresence>
    </motion.header>
  )
}
