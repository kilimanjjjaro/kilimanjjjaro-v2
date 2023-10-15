'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import LargeVersion from '@/components/navbar/LargeVersion'
import SmallVersion from '@/components/navbar/SmallVersion'
import NavbarButton from '@/components/navbar/NavbarButton'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import useNavBar from '@/lib/hooks/useNavBar'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'

export default function NavBar() {
  const { setCursorStatus } = useStore()
  const { version, isVisible } = useNavBar()
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis()
  const pathname = usePathname()

  const handleClick = () => {
    const allowedPaths = ['/', '/en', '/es']

    if (!allowedPaths.includes(pathname)) return

    lenis.scrollTo(0, { duration: 2 })
  }

  return (
    <motion.header
      className={clsx(
        'fixed left-6 right-6 md:left-8 md:right-8 z-50 top-10 items-center md:top-12 mix-blend-difference flex justify-between transition-transform duration-1000 ease-in-out',
        !isVisible && '-translate-y-16'
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
          'leading-none tracking-wide transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
        )}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        onClick={handleClick}
      >
        <Link href='/'>Kilimanjjjaro</Link>
      </h1>
      <AnimatePresence>
        {version === 1 && isDesktop && <LargeVersion key='large-nav' />}
        {version === 2 && isDesktop && <SmallVersion key='small-nav' />}
        {!isDesktop && (
          <motion.div
            key='nav-button'
            className='absolute right-0'
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
                ease: 'easeInOut'
              }
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
          >
            <NavbarButton />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
