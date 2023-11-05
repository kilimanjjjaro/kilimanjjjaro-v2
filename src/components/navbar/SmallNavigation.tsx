'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { CURSOR_STATUS } from '@/lib/constants/general'

export default function SmallNavigation() {
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
      {version > 1 && (
        <>
          <div className='absolute left-0'>
            <Link
              className='block text-xl text-monospace-white overflow-hidden'
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
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }}
                exit={{
                  y: '118%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }}
              >
                <MonospaceLogo />
              </motion.span>
            </Link>
          </div>
          <button
            aria-label='Toggle navigation menu'
            className='absolute right-0 flex flex-col gap-2.5 text-xl text-monospace-light-gray leading-none xl:hover:text-monospace-white transition-colors duration-1000 ease-in-out'
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
                        transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                      }
                    : {
                        y: '100%',
                        transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                      }
                }
                exit={{
                  y: '100%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
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
                        transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                      }
                    : {
                        y: '0%',
                        transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                      }
                }
              >
                Close
              </motion.span>
            </span>
            <motion.span
              aria-hidden='true'
              className='w-full'
              initial={{ scaleX: 0, originX: 'right' }}
              animate={{
                scaleX: 1,
                transition: {
                  duration: 1,
                  ease: [0.65, 0.05, 0.36, 1],
                  delay: 0.1
                }
              }}
              exit={{
                originX: 'left',
                scaleX: 0,
                transition: {
                  duration: 1,
                  ease: [0.65, 0.05, 0.36, 1]
                }
              }}
            >
              <div className='h-0.5 w-full bg-current' />
            </motion.span>
          </button>
        </>
      )}
    </AnimatePresence>
  )
}
