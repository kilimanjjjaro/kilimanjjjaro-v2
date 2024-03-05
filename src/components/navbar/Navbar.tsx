'use client'

import Link from 'next/link'
import clsx from 'clsx'
import LanguageSelector from '@components/shared/LanguageSelector'
import { PlusIcon } from '@components/icons/PlusIcon'
import { useStore } from '@lib/store/store'
import useScroll from '@lib/hooks/useScroll'

export default function Navbar() {
  const navbarStatus = useStore((state) => state.navbarStatus)
  const setNavbarStatus = useStore((state) => state.setNavbarStatus)
  const { scrollPercentage } = useScroll()

  return (
    <header className='fixed left-16 right-16 top-16 z-50 flex justify-between mix-blend-difference'>
      <div className='relative flex-1 overflow-hidden'>
        <Link
          className={`absolute text-xl font-medium text-monospace-white transition-[transform_opacity] duration-700 ease-in-out ${scrollPercentage > 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          href='/'
        >
          <h1>Monospace</h1>
        </Link>
        <h2
          className={`absolute text-xl text-monospace-light-gray transition-[transform_opacity] duration-700 ease-in-out ${scrollPercentage > 1 ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          A solo creative-driven web studio.
        </h2>
      </div>
      <nav className='flex flex-1 items-start justify-end gap-20'>
        <LanguageSelector />
        <button
          className='flex items-center justify-end gap-2.5 text-right text-xl text-monospace-light-gray hover:text-monospace-white'
          onClick={() => setNavbarStatus(!navbarStatus)}
        >
          <span className='flex h-7 flex-col items-center overflow-hidden'>
            <span
              className={clsx(
                'transition duration-700 ease-in-out',
                navbarStatus && 'translate-y-full opacity-0'
              )}
            >
              Menu
            </span>
            <span
              className={clsx(
                'transition duration-700 ease-in-out',
                navbarStatus && '-translate-y-full opacity-100'
              )}
            >
              Close
            </span>
          </span>
          <PlusIcon
            className={clsx(
              'w-3 transition duration-700 ease-in-out',
              navbarStatus && 'rotate-45'
            )}
          />
        </button>
      </nav>
    </header>
  )
}
