'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import useNavbar from '@/lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@/lib/i18n/client'
import {
  LANGUAGES,
  LOCALES,
  NAVIGATION_VARIANTS
} from '@/lib/constants/general'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/lib/constants/variants'
import type { LanguageInterface } from '@/lib/interfaces/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const [showSelector, setShowSelector] = useState(false)
  const changeLocale = useChangeLocale()
  const { version } = useNavbar()

  const languages = useMemo(() => {
    return currentLocale === LOCALES.en ? LANGUAGES.en : LANGUAGES.es
  }, [currentLocale])
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? languages[0] : languages[1]
  )

  const changeLanguage = ({ language }: { language: LanguageInterface }) => {
    setSelectedLanguage(language)
    setShowSelector(false)
    // @ts-expect-error
    changeLocale(language.id)
  }

  useEffect(() => {
    if (version === NAVIGATION_VARIANTS.small) {
      setShowSelector(false)
    }
  }, [version])

  return (
    <div className='flex justify-center'>
      <Button
        className='text-xl text-monospace-light-gray xl:hover:text-monospace-white transition-colors duration-700 ease-in-out'
        onClick={() => setShowSelector(!showSelector)}
        underlined
        underlineTrigger={version === NAVIGATION_VARIANTS.large ?? false}
      >
        {selectedLanguage.name}
      </Button>
      <motion.ul
        className='absolute flex-col items-center hidden gap-2 mb-2 bottom-full'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {languages
          .filter((language) => language.id !== selectedLanguage.id)
          .map((language) => (
            <li key={language.id}>
              <Button
                className='text-xl text-monospace-white xl:hover:text-monospace-light-gray overflow-hidden transition-colors duration-700 ease-in-out'
                onClick={() => changeLanguage({ language })}
              >
                <motion.span
                  className='block'
                  initial={{ y: '100%' }}
                  variants={LANGUAGES_LI_VARIANTS}
                  animate={showSelector ? 'open' : 'closed'}
                >
                  {language.name}
                </motion.span>
              </Button>
            </li>
          ))}
      </motion.ul>
    </div>
  )
}
