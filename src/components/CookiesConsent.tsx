'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next'
import Balancer from 'react-wrap-balancer'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import AnimatedText from '@components/shared/AnimatedText'
import Button from '@components/shared/Button'
import { useScopedI18n } from '@lib/i18n/client'

import cookieImage from '../../public/images/cookie.webp'

export default function CookiesConsent() {
  const t = useScopedI18n('cookiesConsent')
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

  useEffect(() => {
    const cookiesConsent = window.localStorage.getItem('__COOKIES_CONSENT__')

    if (cookiesConsent === null) setShowCookiesConsent(true)
  }, [])

  return (
    <AnimatePresence>
      {showCookiesConsent && (
        <motion.div
          role='alert'
          className='fixed bottom-6 left-6 z-20 w-auto max-w-[256px] flex-col overflow-hidden rounded-md bg-[#030303]/95 backdrop-blur-md xl:bottom-8 xl:left-8'
          initial={{ y: 265 }}
          animate={showCookiesConsent && { y: 0 }}
          exit={{ y: 265, transition: { duration: 1, ease: 'easeInOut' } }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 10
          }}
        >
          <header className='flex h-6 w-full items-center bg-monospace-light-gray/30 px-4'>
            <button
              aria-label='Close cookies consent'
              onClick={handleDecline}
              className='h-3 w-3 rounded-full bg-red-600 transition-colors duration-700 xl:hover:bg-monospace-white'
              onMouseEnter={() => setShowCloseWarning(true)}
              onMouseLeave={() => setShowCloseWarning(false)}
            />
          </header>
          <main className='flex flex-col p-4 font-geist-mono text-xs md:text-sm'>
            <h3 className='mb-2 flex items-center gap-2 text-monospace-white'>
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
                  'h-8 w-full appearance-none rounded-md pt-px outline-none transition-colors duration-700 ease-in-out xl:h-9 xl:hover:bg-red-500/10 xl:hover:text-red-500',
                  showCloseWarning
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-monospace-white/0 text-monospace-white'
                )}
                onClick={handleDecline}
              >
                <AnimatedText
                  className='flex h-full w-full items-center justify-center text-center'
                  text={t('declineButton')}
                />
              </Button>
              <Button
                className={clsx(
                  'h-8 w-full appearance-none rounded-md pt-px text-monospace-white outline-none transition-colors duration-700 ease-in-out focus:bg-monospace-white xl:h-9 xl:hover:bg-green-500/10 xl:hover:text-green-500',
                  showCloseWarning
                    ? 'bg-monospace-white/0'
                    : 'bg-monospace-white/5'
                )}
                onClick={handleAccept}
              >
                <AnimatedText
                  className='flex h-full w-full items-center justify-center text-center'
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
