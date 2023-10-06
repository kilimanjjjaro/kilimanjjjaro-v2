'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import AnimatedText from '@/components/shared/AnimatedText'
import { firaMonoFont } from '@/lib/utils/fonts'
import cookieImage from '../../public/images/cookie.webp'
import { useScopedI18n } from '@/lib/i18n/client'

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
    <motion.div
      role='alert'
      className='fixed flex-col left-8 bg-[#030303]/[0.97] backdrop-blur-sm z-10 w-auto max-w-[256px] overflow-hidden rounded-md bottom-8'
      initial={{ y: 260 }}
      animate={
        showCookiesConsent
          ? {
              y: 0,
              transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 0
              }
            }
          : {
              y: 260,
              transition: {
                duration: 1,
                ease: 'easeInOut'
              },
              transitionEnd: {
                display: 'none'
              }
            }
      }
      transition={{ delay: 5 }}
    >
      <header className='flex items-center w-full h-6 px-4 bg-kili-light-gray/30'>
        <button
          aria-label='Close cookies consent'
          onClick={handleDecline}
          className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full hover:bg-kili-white'
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
        <div className='flex'>
          <button
            className='w-full h-8 rounded-md outline-none appearance-none bg-kili-white/0 text-kili-white'
            onClick={handleDecline}
          >
            <AnimatedText
              className='flex items-center justify-center w-full h-full text-center'
              text={t('declineButton')}
            />
          </button>
          <button
            className='w-full h-8 transition-colors duration-300 ease-in-out rounded-md outline-none appearance-none bg-kili-white/5 text-kili-white hover:text-kili-white xl:hover:bg-kili-white/10 focus:bg-kili-white'
            onClick={handleAccept}
          >
            <AnimatedText
              className='flex items-center justify-center w-full h-full text-center'
              text={t('acceptButton')}
            />
          </button>
          {/* <div
              role='tooltip'
              className={clsx(
                'absolute text-xs text-kili-light-gray transition-opacity duration-300 ease-in-out w-full whitespace-nowrap',
                showCloseWarning ? 'opacity-100' : 'opacity-0'
              )}
            >
              ({t('closeWarning')})
            </div> */}
        </div>
      </main>
    </motion.div>
  )
}
