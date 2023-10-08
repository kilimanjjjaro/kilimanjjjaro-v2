import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import TextButton from '@/components/shared/TextButton'
import { useStore } from '@/lib/store/store'
import useNavBar from '@/lib/hooks/useNavBar'
import { useChangeLocale, useCurrentLocale } from '@/lib/i18n/client'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS, LANGUAGES, LOCALES } from '@/lib/constants/general'
import type { LanguageInterface } from '@/lib/interfaces/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const { setCursorStatus, setNavBarStatus } = useStore()
  const languages = useMemo(() => {
    return currentLocale === LOCALES.en ? LANGUAGES.en : LANGUAGES.es
  }, [currentLocale])
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? languages[0] : languages[1]
  )
  const [showSelector, setShowSelector] = useState(false)
  const { isVisible } = useNavBar()
  const changeLocale = useChangeLocale()

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setNavBarStatus(false)
    setSelectedLanguage(language)
    setShowSelector(false)
    // @ts-expect-error
    changeLocale(language.id)
  }

  useEffect(() => {
    if (!isVisible) {
      setShowSelector(false)
    }
  }, [isVisible, currentLocale])

  return (
    <div className='relative flex justify-end'>
      <TextButton
        className='leading-none tracking-wide transition-colors duration-700 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
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
        {languages.map((language) => (
          <li key={language.id} className='overflow-hidden'>
            <motion.button
              className='leading-none tracking-wide transition-colors duration-700 ease-in-out text-kili-white xl:hover:text-kili-light-gray'
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
