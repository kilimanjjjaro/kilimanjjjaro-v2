import { useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/constants/variants'
import { CURSOR_STATUS, LANGUAGES } from '@/constants/general'
import type { LanguageInterface } from '@/interfaces/general'

export default function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage, setCursorStatus } = useStore()
  const [showSelector, setShowSelector] = useState(false)

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setSelectedLanguage(language)
    setShowSelector(false)
  }

  return (
    <div className='relative flex justify-end'>
      <button
        className='leading-none tracking-wide duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
        aria-label='Select language'
        onClick={() => setShowSelector(!showSelector)}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      >
        {selectedLanguage.name}
      </button>
      <motion.ul
        className='absolute flex-col items-end hidden gap-3 mt-3 top-full'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {LANGUAGES.map((language) => (
          <li key={language.id} className='overflow-hidden'>
            <motion.button
              className='leading-none tracking-wide transition-colors duration-700 ease-in-out text-kili-white hover:text-kili-light-gray'
              onClick={() => handleClick({ language })}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
              variants={LANGUAGES_LI_VARIANTS}
              transition={{
                duration: 0.7,
                ease: 'easeInOut'
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
