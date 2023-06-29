'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { LI_VARIANTS, UL_VARIANTS } from '@/constants/variants'
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
    <div className='relative'>
      <button
        onClick={() => setShowSelector(!showSelector)}
        className='italic leading-none duration-500 ease-in-out text-kili-light-gray hover:text-kili-white'
        aria-label='Select language'
      >
        {selectedLanguage.name}
      </button>
      <motion.ul
        className='absolute left-0 flex-col hidden gap-2 mb-3 bottom-full'
        variants={UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {LANGUAGES.map((language) => (
          <li className='overflow-hidden' key={language.id}>
            <motion.button
              className='italic leading-none text-kili-white'
              onClick={() => handleClick({ language })}
              variants={LI_VARIANTS}
              whileHover={{
                color: '#7A7A7A',
                transition: { duration: 0.5, ease: 'easeInOut' }
              }}
            >
              {language.name}
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
