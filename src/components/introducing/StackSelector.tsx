'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon } from '@/icons/PlusIcon'
import { useStore } from '@/store/store'
import { STACKS_LI_VARIANTS, UL_VARIANTS } from '@/constants/variants'
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
    <div className='flex gap-10 text-4xl px-60 text-kilimanjjjaro-white'>
      <button onClick={() => setShowSelector(!showSelector)}>
        <h2 className='flex items-center gap-4 ease-in-out hover:text-kilimanjjjaro-light-gray duration-400'>
          {selectedStack.name} Skills
          <motion.span animate={showSelector ? { rotate: 45 } : { rotate: 0 }}>
            <PlusIcon className='w-4' />
          </motion.span>
        </h2>
      </button>
      <motion.ul
        className='hidden gap-10'
        variants={UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {stacks
          .filter((stack) => stack.id !== selectedStack.id)
          .map((stack) => (
            <motion.li
              key={stack.id}
              variants={STACKS_LI_VARIANTS}
              whileHover={{
                color: '#7A7A7A',
                transition: { duration: 0.4, ease: 'easeInOut' }
              }}
            >
              <button onClick={() => handleClick(stack)}>
                {stack.name} Skills
              </button>
            </motion.li>
          ))}
      </motion.ul>
    </div>
  )
}
