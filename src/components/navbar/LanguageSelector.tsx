import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@/lib/i18n/client'
import {
  LANGUAGES_LI_VARIANTS,
  LANGUAGES_UL_VARIANTS
} from '@/lib/constants/variants'
import { LANGUAGES, LOCALES } from '@/lib/constants/globals'
import type { LanguageInterface } from '@/lib/types/globals'
import { TRANSITION } from '@/lib/constants/animation'
import { CursorStatus } from '@/lib/constants/cursor'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const { setCursorStatus, setNavbarStatus } = useStore()
  const languages = useMemo(
    () => (currentLocale === LOCALES.en ? LANGUAGES.en : LANGUAGES.es),
    [currentLocale]
  )
  const [english, spanish] = languages
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? english : spanish
  )
  const [showSelector, setShowSelector] = useState(false)
  const { isVisible } = useNavbar()
  const changeLocale = useChangeLocale()

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setNavbarStatus(false)
    setSelectedLanguage(language)
    setShowSelector(false)
    changeLocale(language.id)
  }

  if (!isVisible && showSelector) {
    setShowSelector(false)
  }

  return (
    <div className='relative flex justify-end mt-0.5'>
      <Button
        className='leading-none tracking-wide transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
        onClick={() => {
          setShowSelector(!showSelector)
        }}
      >
        {selectedLanguage.name}
      </Button>
      <motion.ul
        className='absolute flex-col items-end hidden gap-1.5 mt-3 top-full'
        variants={LANGUAGES_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
        transition={TRANSITION}
      >
        {languages.map((language) => (
          <li key={language.id} className='overflow-hidden'>
            <motion.button
              className='leading-none tracking-wide transition-colors duration-1000 ease-in-out text-kili-white xl:hover:text-kili-light-gray'
              onClick={() => {
                handleClick({ language })
              }}
              onMouseEnter={() => {
                setCursorStatus(CursorStatus.Hover)
              }}
              onMouseLeave={() => {
                setCursorStatus(CursorStatus.Default)
              }}
              variants={LANGUAGES_LI_VARIANTS}
              transition={TRANSITION}
            >
              {language.name}
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
