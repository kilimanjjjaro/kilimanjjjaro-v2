'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next'
import Balancer from 'react-wrap-balancer'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import AnimatedText from '@/components/shared/AnimatedText'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { firaMonoFont } from '@/lib/utils/fonts'
import { CURSOR_STATUS } from '@/lib/constants/general'
import cookieImage from '../../public/images/cookie.webp'

export default function CookiesConsent() {
  const t = useScopedI18n('cookiesConsent')
  const { setCursorStatus } = useStore()
  const [showCookiesConsent, setShowCookiesConsent] = useState(false)
  const [showCloseWarning, setShowCloseWarning] = useState(false)

  const handleAccept = () => {
    window.localStorage.setItem('__COOKIES_CONSENT__', '1')

    setShowCookiesConsent(false)
  }

  const handleDecline = () => {
    window.localStorage.setItem('__COOKIES_CONSENT__', '0')

    deleteCookie('Next-Locale')

    setShowCookiesConsent(false)
  }

  const handleMouseEnter = () => {
    setShowCloseWarning(true)
    setCursorStatus(CURSOR_STATUS.HOVER)
  }

  const handleMouseLeave = () => {
    setShowCloseWarning(false)
    setCursorStatus(CURSOR_STATUS.DEFAULT)
  }

  useEffect(() => {
    const cookiesConsent = window.localStorage.getItem('__COOKIES_CONSENT__')

    if (cookiesConsent === null) setShowCookiesConsent(true)
  }, [])

  return (
    <AnimatePresence>
      {showCookiesConsent && (
        <motion.div
          role='alert'
          className='fixed flex-col bottom-6 left-6 xl:bottom-8 xl:left-8 bg-[#030303]/95 backdrop-blur-md z-20 w-auto max-w-[256px] overflow-hidden rounded-md'
          initial={{ y: 265 }}
          animate={showCookiesConsent && { y: 0 }}
          exit={{ y: 265, transition: { duration: 1, ease: 'easeInOut' } }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 10
          }}
        >
          <header className='flex items-center w-full h-6 px-4 bg-monospace-light-gray/30'>
            <button
              aria-label='Close cookies consent'
              onClick={handleDecline}
              className='w-3 h-3 transition-colors duration-1000 bg-red-600 rounded-full xl:hover:bg-monospace-white'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </header>
          <main
            className={`p-4 flex flex-col text-xs md:text-sm ${firaMonoFont}`}
          >
            <h3 className='flex items-center gap-2 mb-2 text-monospace-white'>
              {t('headline')}
              <Image
                src={cookieImage}
                width={18}
                height={18}
                alt='Cookies Consent'
              />
            </h3>
            <p className='mb-3 text-monospace-light-gray'>
              <Balancer>{t('description')}</Balancer>
            </p>
            <div className='flex gap-4 text-xs md:text-sm'>
              <Button
                className={clsx(
                  'w-full h-8 xl:h-9 pt-px rounded-md outline-none transition-colors duration-1000 ease-in-out appearance-none xl:hover:text-red-500 xl:hover:bg-red-500/10',
                  showCloseWarning
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-monospace-white/0 text-monospace-white'
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
                  'w-full h-8 xl:h-9 pt-px transition-colors duration-1000 ease-in-out rounded-md outline-none appearance-none text-monospace-white xl:hover:text-green-500 xl:hover:bg-green-500/10 focus:bg-monospace-white',
                  showCloseWarning
                    ? 'bg-monospace-white/0'
                    : 'bg-monospace-white/5'
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
