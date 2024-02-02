'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@components/shared/Button'
import useNavbar from '@lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@lib/i18n/client'
import { LANGUAGES, LOCALES, NAVIGATION_VARIANTS } from '@lib/constants/general'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@lib/constants/variants'
import type { LanguageInterface } from '@lib/types/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const [showSelector, setShowSelector] = useState(false)
  const changeLocale = useChangeLocale()
  const { variant } = useNavbar()

  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? LANGUAGES[0] : LANGUAGES[1]
  )

  const changeLanguage = ({ language }: { language: LanguageInterface }) => {
    setSelectedLanguage(language)
    setShowSelector(false)
    // @ts-expect-error
    changeLocale(language.id)
  }

  useEffect(() => {
    if (variant === NAVIGATION_VARIANTS.SMALL) {
      setShowSelector(false)
    }
  }, [variant])

  return (
    <div className='flex justify-center'>
      <Button
        className='text-xl text-monospace-white'
        onClick={() => setShowSelector(!showSelector)}
        underlined
        underlineTrigger={variant === NAVIGATION_VARIANTS.LARGE}
      >
        {selectedLanguage.name}
      </Button>
      <motion.ul
        className='absolute top-full mt-2 hidden flex-col items-center gap-2'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {LANGUAGES.filter(
          (language) => language.id !== selectedLanguage.id
        ).map((language) => (
          <li key={language.id}>
            <Button
              className='overflow-hidden text-xl text-monospace-light-gray transition-colors duration-700 ease-in-out xl:hover:text-monospace-white'
              onClick={() => changeLanguage({ language })}
            >
              <motion.span
                className='block'
                initial={{ y: '-100%', opacity: 0 }}
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
