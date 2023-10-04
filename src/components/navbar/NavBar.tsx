'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import LargeVersion from '@/components/navbar/LargeVersion'
import SmallVersion from '@/components/navbar/SmallVersion'
import useNavBar from '@/lib/hooks/useNavBar'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'

export default function NavBar({ locale }: { locale: string }) {
  const { setCursorStatus } = useStore()
  const { version, isVisible } = useNavBar()
  const lenis = useLenis()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== '/') return

    lenis.scrollTo(0, { duration: 2 })
  }

  return (
    <motion.header
      className={clsx(
        'fixed left-8 right-8 z-50 top-12 mix-blend-difference flex justify-between transition-transform duration-700 ease-in-out',
        !isVisible && '-translate-y-16'
      )}
      initial={{
        opacity: 0
      }}
      animate={{
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
          'leading-none tracking-wide transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
        )}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        onClick={handleClick}
      >
        <Link href='/'>Kilimanjjjaro</Link>
      </h1>
      <AnimatePresence>
        {version === 1 && <LargeVersion key='large-nav' locale={locale} />}
        {version === 2 && <SmallVersion key='small-nav' />}
      </AnimatePresence>
    </motion.header>
  )
}
