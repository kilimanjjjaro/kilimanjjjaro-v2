'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useChangeLocale, useCurrentLocale } from '@/lib/i18n/client'
import { LANGUAGES, LOCALES } from '@/lib/constants/general'
import { LANG_LI_VARIANTS, LANG_UL_VARIANTS } from '@/lib/constants/variants'
import type { LanguageInterface } from '@/lib/interfaces/general'

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale()
  const { setNavbarStatus } = useStore()
  const [showSelector, setShowSelector] = useState(false)
  const changeLocale = useChangeLocale()
  const { version } = useNavbar()

  const languages = useMemo(() => {
    return currentLocale === LOCALES.en ? LANGUAGES.en : LANGUAGES.es
  }, [currentLocale])
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale === LOCALES.en ? languages[0] : languages[1]
  )

  const handleClick = ({ language }: { language: LanguageInterface }) => {
    setNavbarStatus(false)
    setSelectedLanguage(language)
    setShowSelector(false)
    // @ts-expect-error
    changeLocale(language.id)
  }

  useEffect(() => {
    if (version > 1) {
      setShowSelector(false)
    }
  }, [version])

  return (
    <div className='flex justify-center'>
      <Button
        className='flex flex-col gap-2.5 text-xl text-monospace-light-gray xl:hover:text-monospace-white transition-colors duration-700 ease-in-out'
        onClick={() => setShowSelector(!showSelector)}
      >
        <span className='overflow-hidden'>
          <motion.span
            className='block leading-none'
            initial={{ y: '100%' }}
            animate={
              version === 1
                ? {
                    y: '0%',
                    transition: {
                      duration: 1,
                      ease: [0.77, 0, 0.18, 1]
                    }
                  }
                : {
                    y: '100%',
                    transition: {
                      duration: 1,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.1
                    }
                  }
            }
            exit={{
              y: '100%',
              transition: { duration: 1, ease: [0.77, 0, 0.18, 1] }
            }}
          >
            {selectedLanguage.name}
          </motion.span>
        </span>
        <motion.span
          className='w-full'
          aria-hidden='true'
          initial={{ scaleX: 0, originX: 'right' }}
          animate={
            version === 1
              ? {
                  scaleX: 1,
                  transition: {
                    duration: 1,
                    ease: [0.77, 0, 0.18, 1],
                    delay: 0.1
                  }
                }
              : {
                  originX: 'left',
                  scaleX: 0,
                  transition: {
                    duration: 1,
                    ease: [0.77, 0, 0.18, 1]
                  }
                }
          }
          exit={{
            scaleX: 0,
            transition: {
              duration: 1,
              ease: [0.77, 0, 0.18, 1]
            }
          }}
        >
          <div className='h-0.5 w-full bg-current' />
        </motion.span>
      </Button>
      <motion.ul
        className='absolute flex-col items-center hidden gap-2 mb-2 bottom-full'
        variants={LANG_UL_VARIANTS}
        animate={showSelector ? 'open' : 'closed'}
      >
        {languages
          .filter((language) => language.id !== selectedLanguage.id)
          .map((language) => (
            <li key={language.id}>
              <Button
                className='text-xl text-monospace-white xl:hover:text-monospace-light-gray overflow-hidden transition-colors duration-700 ease-in-out'
                onClick={() => handleClick({ language })}
              >
                <motion.span
                  className='block'
                  initial={{ y: '100%' }}
                  variants={LANG_LI_VARIANTS}
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
