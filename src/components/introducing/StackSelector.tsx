'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { PlusIcon } from '@/icons/PlusIcon'
import { useStore } from '@/store/store'
import { STACKS_LI_VARIANTS, STACKS_UL_VARIANTS } from '@/constants/variants'
import type { StackInterface } from '@/interfaces/general'

export default function StackSelector() {
  const [showSelector, setShowSelector] = useState(false)
  const { selectedStack, setSelectedStack, stacks, setShouldMoveToStart } =
    useStore()

  const handleClick = (stack: StackInterface) => {
    setSelectedStack(stack)
    setShowSelector(false)
    setShouldMoveToStart(true)
  }

  return (
    <div className='flex gap-10 px-40 text-4xl text-kili-white'>
      <button onClick={() => setShowSelector(!showSelector)}>
        <h2 className='flex items-center gap-4 leading-none duration-700 ease-in-out hover:text-kili-light-gray'>
          {selectedStack.name} Skills
          <span
            className={clsx(
              'transition-transform duration-700 ease-in-out',
              showSelector && 'rotate-45'
            )}
          >
            <PlusIcon className='w-4' />
          </span>
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
            <li key={stack.id} className='overflow-hidden leading-none'>
              <motion.button
                className='transition-colors duration-700 ease-in-out hover:text-kili-light-gray'
                onClick={() => handleClick(stack)}
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
