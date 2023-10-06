'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next'
import Balancer from 'react-wrap-balancer'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import AnimatedText from '@/components/shared/AnimatedText'
import { useScopedI18n } from '@/lib/i18n/client'
import { firaMonoFont } from '@/lib/utils/fonts'
import cookieImage from '../../public/images/cookie.webp'
import TextButton from './shared/TextButton'

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
          className='fixed flex-col left-8 bg-[#030303]/95 backdrop-blur-md z-10 w-auto max-w-[256px] overflow-hidden rounded-md bottom-8'
          initial={{ y: 265 }}
          animate={showCookiesConsent && { y: 0 }}
          exit={{ y: 265, transition: { duration: 0.7, ease: 'easeInOut' } }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
            delay: 4
          }}
        >
          <header className='flex items-center w-full h-6 px-4 bg-kili-light-gray/30'>
            <button
              aria-label='Close cookies consent'
              onClick={handleDecline}
              className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full xl:hover:bg-kili-white'
              onMouseEnter={() => setShowCloseWarning(true)}
              onMouseLeave={() => setShowCloseWarning(false)}
            />
          </header>
          <main className={`p-4 flex flex-col text-sm ${firaMonoFont}`}>
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
            <div className='flex gap-4'>
              <TextButton
                className={clsx(
                  'w-full h-9 pt-[1px] rounded-md outline-none transition-colors duration-500 ease-in-out appearance-none xl:hover:text-red-500 xl:hover:bg-red-500/10',
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
              </TextButton>
              <TextButton
                className={clsx(
                  'w-full h-9 pt-[1px] transition-colors duration-500 ease-in-out rounded-md outline-none appearance-none text-kili-white xl:hover:text-green-500 xl:hover:bg-green-500/10 focus:bg-kili-white',
                  showCloseWarning ? 'bg-kili-white/0' : 'bg-kili-white/5'
                )}
                onClick={handleAccept}
              >
                <AnimatedText
                  className='flex items-center justify-center w-full h-full text-center'
                  text={t('acceptButton')}
                />
              </TextButton>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
