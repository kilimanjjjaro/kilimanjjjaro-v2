'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useLenis } from '@studio-freight/react-lenis'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import {
  STACKS_LI_VARIANTS,
  STACKS_UL_VARIANTS
} from '@/lib/constants/variants'
import type { StackInterface } from '@/lib/types/general'
import { STACKS } from '@/lib/constants/general'

export default function StackSelector() {
  const selectedStack = useStore((state) => state.selectedStack)
  const setSelectedStack = useStore((state) => state.setSelectedStack)
  const setShouldMoveToStart = useStore((state) => state.setShouldMoveToStart)

  const [showSelector, setShowSelector] = useState(false)
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis()

  const handleClickOnSelector = () => {
    setShowSelector(!showSelector)

    if (isDesktop) return

    if (showSelector) {
      lenis?.start()
    } else {
      lenis?.stop()
    }
  }

  const handleClickOnSkills = (stack: StackInterface) => {
    setSelectedStack(stack)
    setShowSelector(false)
    setShouldMoveToStart(true)
  }

  return (
    <div className='flex gap-10 pl-6 text-4xl xl:pl-40 text-monospace-white'>
      <button className='z-20 xl:z-0' onClick={() => handleClickOnSelector()}>
        <h2 className='flex items-center gap-4 leading-none group'>
          {selectedStack.name} Skills
          <PlusIcon
            className={clsx(
              'duration-700 transition-transform ease-in-out w-4 xl:group-hover:rotate-180',
              showSelector && '!-rotate-45'
            )}
          />
        </h2>
      </button>
      <motion.ul
        className='fixed left-0 right-0 z-10 flex-col items-center hidden gap-6 bottom-8 xl:gap-10 xl:flex-row xl:static'
        variants={STACKS_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          staggerChildren: 0.1
        }}
      >
        {!isDesktop && (
          <motion.div
            className='fixed bottom-0 left-0 w-full h-screen origin-bottom bg-gradient-to-t from-monospace-black to-monospace-black/0'
            initial={{ scaleY: '0%' }}
            animate={showSelector ? { scaleY: '100%' } : { scaleY: '0%' }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
          />
        )}
        {STACKS.filter((stack) => stack.id !== selectedStack.id).map(
          (stack) => (
            <li
              key={stack.id}
              className='overflow-hidden leading-none transition-colors duration-700 ease-in-out xl:hover:text-monospace-light-gray'
            >
              <motion.button
                onClick={() => handleClickOnSkills(stack)}
                variants={STACKS_LI_VARIANTS}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
              >
                {stack.name} Skills
              </motion.button>
            </li>
          )
        )}
      </motion.ul>
    </div>
  )
}
