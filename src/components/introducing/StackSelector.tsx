'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { PlusIcon } from '@/icons/PlusIcon'
import { useStore } from '@/store/store'
import { STACKS_LI_VARIANTS, STACKS_UL_VARIANTS } from '@/constants/variants'
import type { StackInterface } from '@/interfaces/general'
import { CURSOR_STATUS } from '@/constants/general'

export default function StackSelector() {
  const {
    selectedStack,
    setSelectedStack,
    stacks,
    setShouldMoveToStart,
    setCursorStatus
  } = useStore()
  const [showSelector, setShowSelector] = useState(false)

  const handleClick = (stack: StackInterface) => {
    setSelectedStack(stack)
    setShowSelector(false)
    setShouldMoveToStart(true)
  }

  return (
    <div className='flex gap-10 px-40 text-4xl text-kili-white'>
      <button
        onClick={() => setShowSelector(!showSelector)}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      >
        <h2 className='flex items-center gap-4 leading-none group'>
          {selectedStack.name} Skills
          <PlusIcon
            className={clsx(
              'duration-700 transition-transform ease-in-out w-4 group-hover:rotate-180',
              showSelector && '!-rotate-45'
            )}
          />
        </h2>
      </button>
      <motion.ul
        className='hidden gap-10'
        variants={STACKS_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
          staggerChildren: 0.1
        }}
      >
        {stacks
          .filter((stack) => stack.id !== selectedStack.id)
          .map((stack) => (
            <li
              key={stack.id}
              className='overflow-hidden leading-none transition-colors duration-700 ease-in-out hover:text-kili-light-gray'
            >
              <motion.button
                onClick={() => handleClick(stack)}
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                variants={STACKS_LI_VARIANTS}
                transition={{
                  duration: 0.7,
                  ease: 'easeInOut'
                }}
              >
                {stack.name} Skills
              </motion.button>
            </li>
          ))}
      </motion.ul>
    </div>
  )
}
