'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/constants/variants'
import { LANGUAGES } from '@/constants/general'
import type { LanguageInterface } from '@/interfaces/general'

export default function LanguageSelector() {
  const [showSelector, setShowSelector] = useState(false)
  const { selectedLanguage, setSelectedLanguage } = useStore()

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setSelectedLanguage(language)
    setShowSelector(false)
  }

  return (
    <div className='relative flex justify-end'>
      <button
        onClick={() => setShowSelector(!showSelector)}
        className='tracking-wide duration-500 ease-in-out text-kili-light-gray hover:text-kili-white'
        aria-label='Select language'
      >
        {selectedLanguage.name}
      </button>
      <motion.ul
        className='absolute flex-col items-end hidden gap-2 mt-3 top-full'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {LANGUAGES.map((language) => (
          <li key={language.id} className='overflow-hidden'>
            <motion.button
              className='tracking-wide transition-colors duration-500 ease-in-out text-kili-white hover:text-kili-light-gray'
              onClick={() => handleClick({ language })}
              variants={LANGUAGES_LI_VARIANTS}
            >
              {language.name}
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
