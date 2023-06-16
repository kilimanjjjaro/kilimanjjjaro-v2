'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useNavBar } from '@/store/store'

export default function NavBar() {
  const { isOpen, setIsOpen } = useNavBar()

  return (
    <nav>
      <div
        role='button'
        className='relative flex flex-col h-auto gap-2 cursor-pointer z-9999 group'
        onClick={setIsOpen}
      >
        <div
          className={clsx(
            'w-6 h-[2px] bg-kilimanjjjaro-light-gray group-hover:bg-kilimanjjjaro-white duration-400 ease-in-out',
            isOpen && 'rotate-[135deg] translate-y-[3px]'
          )}
        />
        <div
          className={clsx(
            'w-6 h-[2px] bg-kilimanjjjaro-light-gray group-hover:bg-kilimanjjjaro-white duration-400 ease-in-out',
            isOpen && '-rotate-[135deg] -translate-y-[7px]'
          )}
        />
      </div>
      <ul
        className={clsx(
          'flex-col gap-4 h-full p-40 text-kilimanjjjaro-white w-full bg-kilimanjjjaro-dark-gray fixed top-0 left-0 z-9998',
          isOpen && 'flex',
          !isOpen && 'hidden'
        )}
      >
        <Link href='#introducing'>
          <li>Introducing</li>
        </Link>
        <Link href='#projects'>
          <li>Projects</li>
        </Link>
        <Link href='#kwnow-me'>
          <li>Know me</li>
        </Link>
        <Link href='#lets-talk'>
          <li>Let&apos;s talk</li>
        </Link>
      </ul>
    </nav>
  )
}
