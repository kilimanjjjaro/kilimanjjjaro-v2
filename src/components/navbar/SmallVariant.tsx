'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { CURSOR_STATUS, NAVIGATION_VARIANTS } from '@/lib/constants/general'
import { BUTTON_UNDERLINE_VARIANTS } from '@/lib/constants/variants'

export default function SmallVariant() {
  const { navbarStatus, setNavbarStatus, setCursorStatus } = useStore()
  const { version } = useNavbar()
  const pathname = usePathname()
  const lenis = useLenis()

  const handleClick = () => {
    const allowedPaths = ['/', '/en', '/es']

    if (!allowedPaths.includes(pathname)) return

    lenis.scrollTo(0, { duration: 2 })
  }

  return (
    <AnimatePresence>
      {version === NAVIGATION_VARIANTS.small && (
        <>
          <div className='absolute left-0'>
            <Link
              className='block overflow-hidden'
              href='/'
              onClick={handleClick}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            >
              <motion.span
                className='block'
                initial={{ y: '118%' }}
                animate={{
                  y: '0%',
                  transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                }}
                exit={{
                  y: '118%',
                  transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                }}
              >
                <MonospaceLogo className='text-xl text-monospace-white' />
              </motion.span>
            </Link>
          </div>
          <button
            aria-label='Toggle navigation menu'
            className='absolute right-0 flex flex-col gap-2.5 text-xl text-monospace-light-gray leading-none xl:hover:text-monospace-white transition-colors duration-700 ease-in-out group'
            onClick={() => setNavbarStatus(!navbarStatus)}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          >
            <span className='relative flex flex-col items-center justify-start h-5 overflow-hidden'>
              <motion.span
                initial={{ y: '100%' }}
                animate={
                  !navbarStatus
                    ? {
                        y: '0%',
                        transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                      }
                    : {
                        y: '100%',
                        transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                      }
                }
                exit={{
                  y: '100%',
                  transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                }}
              >
                Menu
              </motion.span>
              <motion.span
                initial={{ y: '0%' }}
                animate={
                  navbarStatus
                    ? {
                        y: '-100%',
                        transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                      }
                    : {
                        y: '0%',
                        transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                      }
                }
              >
                Close
              </motion.span>
            </span>
            <motion.span
              aria-hidden='true'
              className='w-full'
              variants={BUTTON_UNDERLINE_VARIANTS}
              initial={{ scaleX: 0, originX: 'right' }}
              animate='open'
              exit='closed'
            >
              <div className='h-0.5 w-full bg-current xl:origin-right xl:group-hover:scale-x-0 xl:group-hover:origin-left xl:transition-transform xl:duration-700 xl:ease-in-out' />
            </motion.span>
          </button>
        </>
      )}
    </AnimatePresence>
  )
}
