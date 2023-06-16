'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useNavBar } from '@/store/store'
import { SECTIONS } from '@/constants/general'

export default function NavBar() {
  const { isOpen, setIsOpen } = useNavBar()

  return (
    <nav>
      <button
        className='relative flex flex-col h-auto gap-2 cursor-pointer z-9999 group'
        onClick={setIsOpen}
        aria-label='Toggle navigation menu'
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
      </button>
      <ul
        className={clsx(
          'flex-col gap-4 h-full p-40 text-kilimanjjjaro-white w-full bg-kilimanjjjaro-dark-gray fixed top-0 left-0 z-9998',
          isOpen && 'flex',
          !isOpen && 'hidden'
        )}
      >
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
