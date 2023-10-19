import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@/lib/i18n/client'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/lib/constants/variants'
import { CURSOR_STATUS, LANGUAGES, LOCALES } from '@/lib/constants/general'
import type { LanguageInterface } from '@/lib/interfaces/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const { setCursorStatus, setNavbarStatus } = useStore()
  const languages = useMemo(() => {
    return currentLocale === LOCALES.en ? LANGUAGES.en : LANGUAGES.es
  }, [currentLocale])
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? languages[0] : languages[1]
  )
  const [showSelector, setShowSelector] = useState(false)
  const { isVisible } = useNavbar()
  const changeLocale = useChangeLocale()

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setNavbarStatus(false)
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
      <Button
        className='leading-none tracking-wide transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
        onClick={() => setShowSelector(!showSelector)}
      >
        {selectedLanguage.name}
      </Button>
      <motion.ul
        className='absolute flex-col items-end hidden gap-3 mt-3 top-full'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {languages.map((language) => (
          <li key={language.id} className='overflow-hidden'>
            <motion.button
              className='leading-none tracking-wide transition-colors duration-1000 ease-in-out text-kili-white xl:hover:text-kili-light-gray'
              onClick={() => handleClick({ language })}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
              variants={LANGUAGES_LI_VARIANTS}
              transition={{
                duration: 1,
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
