'use client'

import { useEffect, useState } from 'react'
import useNavbar from '@lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@lib/i18n/client'
import { LANGUAGES, LOCALES, NAVIGATION_VARIANTS } from '@lib/constants/general'
import type { LanguageInterface } from '@lib/types/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const [showSelector, setShowSelector] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? LANGUAGES[0] : LANGUAGES[1]
  )
  const changeLocale = useChangeLocale()
  const { variant } = useNavbar()

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
    <div className='relative flex justify-center gap-2'>
      <button
        className='text-xl text-monospace-light-gray transition-colors duration-700 ease-in-out xl:hover:text-monospace-white'
        onClick={() => setShowSelector(!showSelector)}
      >
        {selectedLanguage.name}
      </button>
      <ul
        className={`absolute top-full flex-col items-center gap-2 ${!showSelector ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        {LANGUAGES.filter(
          (language) => language.id !== selectedLanguage.id
        ).map((language) => (
          <li key={language.id}>
            <button
              className='overflow-hidden text-xl text-monospace-light-gray xl:hover:text-monospace-white'
              onClick={() => changeLanguage({ language })}
            >
              <span
                className={`block transition duration-700 ease-in-out ${showSelector ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
              >
                {language.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
