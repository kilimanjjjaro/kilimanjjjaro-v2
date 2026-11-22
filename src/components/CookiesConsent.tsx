'use client'

import { useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next/client'
import Balancer from 'react-wrap-balancer'
import { AnimatePresence, motion } from 'motion/react'
import clsx from 'clsx'
import AnimatedText from '@/components/shared/AnimatedText'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { firaMonoFont } from '@/lib/utils/fonts'
import subscribeToStorage from '@/lib/utils/subscribeToStorage'
import needsCookiesConsent from '@/lib/utils/needsCookiesConsent'
import { NO_OFFSET, TRANSITION } from '@/lib/constants/animation'
import {
  COOKIES_CONSENT_DELAY,
  COOKIES_CONSENT_HIDDEN_OFFSET,
  COOKIES_CONSENT_STORAGE_KEY
} from '@/lib/constants/projects-ui'
import cookieImage from '../../public/images/cookie.webp'
import { CursorStatus } from '@/lib/constants/cursor'

export default function CookiesConsent() {
  const t = useScopedI18n('cookiesConsent')
  const { setCursorStatus } = useStore()
  const needsConsent = useSyncExternalStore(
    subscribeToStorage,
    needsCookiesConsent,
    () => false
  )
  const [isDismissed, setIsDismissed] = useState(false)
  const [showCloseWarning, setShowCloseWarning] = useState(false)
  const showCookiesConsent = needsConsent && !isDismissed

  const handleAccept = () => {
    window.localStorage.setItem(COOKIES_CONSENT_STORAGE_KEY, '1')

    setIsDismissed(true)
  }

  const handleDecline = () => {
    window.localStorage.setItem(COOKIES_CONSENT_STORAGE_KEY, '0')

    deleteCookie('Next-Locale')

    setIsDismissed(true)
  }

  const handleMouseEnter = () => {
    setShowCloseWarning(true)
    setCursorStatus(CursorStatus.Hover)
  }

  const handleMouseLeave = () => {
    setShowCloseWarning(false)
    setCursorStatus(CursorStatus.Default)
  }

  return (
    <AnimatePresence>
      {showCookiesConsent && (
        <motion.div
          role='alert'
          className='fixed flex-col bottom-6 left-6 xl:bottom-8 xl:left-8 bg-[#030303]/95 backdrop-blur-md z-20 w-auto max-w-[256px] overflow-hidden rounded-md'
          initial={{ y: COOKIES_CONSENT_HIDDEN_OFFSET }}
          animate={{ y: NO_OFFSET }}
          exit={{ y: COOKIES_CONSENT_HIDDEN_OFFSET, transition: TRANSITION }}
          transition={{ ...TRANSITION, delay: COOKIES_CONSENT_DELAY }}
        >
          <header className='flex items-center w-full h-6 px-4 bg-kili-light-gray/30'>
            <button
              aria-label='Close cookies consent'
              onClick={handleDecline}
              className='w-3 h-3 transition-colors duration-1000 bg-red-600 rounded-full xl:hover:bg-kili-white'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </header>
          <main
            className={`p-4 flex flex-col text-xs md:text-sm ${firaMonoFont}`}
          >
            <h3 className='flex items-center gap-2 mb-2 text-kili-white'>
              {t('headline')}
              <Image
                src={cookieImage}
                width={18}
                height={18}
                alt='Cookies Consent'
              />
            </h3>
            <p className='mb-3 text-kili-light-gray'>
              <Balancer>{t('description')}</Balancer>
            </p>
            <div className='flex gap-4 text-xs md:text-sm'>
              <Button
                className={clsx(
                  'w-full h-8 xl:h-9 pt-px rounded-md outline-hidden transition-colors duration-1000 ease-in-out appearance-none xl:hover:text-red-500 xl:hover:bg-red-500/10',
                  showCloseWarning
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-kili-white/0 text-kili-white'
                )}
                onClick={handleDecline}
              >
                <AnimatedText
                  className='flex items-center justify-center w-full h-full text-center'
                  text={t('declineButton')}
                />
              </Button>
              <Button
                className={clsx(
                  'w-full h-8 xl:h-9 pt-px transition-colors duration-1000 ease-in-out rounded-md outline-hidden appearance-none text-kili-white xl:hover:text-green-500 xl:hover:bg-green-500/10 focus:bg-kili-white',
                  showCloseWarning ? 'bg-kili-white/0' : 'bg-kili-white/5'
                )}
                onClick={handleAccept}
              >
                <AnimatedText
                  className='flex items-center justify-center w-full h-full text-center'
                  text={t('acceptButton')}
                />
              </Button>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
