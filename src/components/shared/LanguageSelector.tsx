'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { LI_VARIANTS, UL_VARIANTS } from '@/constants/variants'
import { LANGUAGES } from '@/constants/general'

export default function LanguageSelector() {
  const [showSelector, setShowSelector] = useState(false)

  return (
    <div className='relative'>
      <button
        aria-label='Select language'
        onClick={() => setShowSelector(!showSelector)}
      >
        <LanguageIcon className='w-5 ease-in-out stroke-kilimanjjjaro-light-gray hover:stroke-kilimanjjjaro-white duration-400' />
      </button>
      <motion.ul
        className='absolute left-0 flex-col hidden gap-2 mb-3 text-white bottom-full'
        variants={UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {LANGUAGES.map((language) => (
          <motion.li key={language.id} variants={LI_VARIANTS}>
            <button className='ease-in-out hover:translate-x-1 duration-400'>
              {language.name}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
