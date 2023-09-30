import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/lib/store/store'
import useNavBar from '@/lib/hooks/useNavBar'
import { useChangeLocale, useCurrentLocale } from '@/lib/locales/client'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS, LANGUAGES } from '@/lib/constants/general'
import type { LanguageInterface } from '@/lib/interfaces/general'
import TextButton from '../shared/TextButton'

export default function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage, setCursorStatus } = useStore()
  const [showSelector, setShowSelector] = useState(false)
  const { isVisible } = useNavBar()
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setSelectedLanguage(language)
    setShowSelector(false)
    // @ts-expect-error
    changeLocale(language.id)
  }

  useEffect(() => {
    if (!isVisible) {
      setShowSelector(false)
    }

    const language = LANGUAGES.find((language) => language.id === currentLocale)

    if (language !== undefined) {
      setSelectedLanguage(language)
    }
  }, [isVisible, currentLocale, setSelectedLanguage])

  return (
    <div className='relative flex justify-end'>
      <TextButton
        className='leading-none tracking-wide transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
        onClick={() => setShowSelector(!showSelector)}
      >
        {selectedLanguage.name}
      </TextButton>
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
