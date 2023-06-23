'use client'

import Link from 'next/link'
import clsx from 'clsx'
import KilimanjjjaroLogo from '@/components/navbar/KilimanjjjaroLogo'
import useScroll from '@/hooks/useScroll'
import { useStore } from '@/store/store'
import { SECTIONS } from '@/constants/general'

export default function NavBar() {
  const { navBarStatus, setNavBarStatus } = useStore()
  const { isVisible } = useScroll()

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 flex items-center justify-between w-full px-10 pt-10 mix-blend-difference transition-transform duration-400 ease-in-out z-9999',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <Link
          className='w-20 ease-in-out text-kilimanjjjaro-light-gray hover:text-kilimanjjjaro-white duration-400'
          style={{ clipPath: 'circle(50% at 50% 50%)' }}
          href='/'
        >
          <KilimanjjjaroLogo />
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
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full h-full bg-kilimanjjjaro-dark-gray z-9998',
          navBarStatus && 'block',
          !navBarStatus && 'hidden'
        )}
      >
        <ul className='flex flex-col gap-4 p-40'>
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link
                className='text-7xl text-kilimanjjjaro-white'
                href={`#${section.id}`}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
