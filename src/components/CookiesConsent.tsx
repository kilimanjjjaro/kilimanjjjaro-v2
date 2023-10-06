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

interface Props {
  texts: {
    headline: string
    description: string
    acceptButton: string
    declineButton: string
    closeWarning: string
  }
}

export default function CookiesConsent({ texts }: Props) {
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
      className='fixed flex-col left-8 bg-[#030303] z-10 w-64 overflow-hidden rounded-md bottom-8'
      initial={{ y: 256 }}
      animate={
        showCookiesConsent
          ? {
              y: 0,
              transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 5
              }
            }
          : {
              y: 256,
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
          {texts.headline}{' '}
          <Image
            src={cookieImage}
            width={18}
            height={18}
            alt='Cookies Consent'
          />
        </h3>
        <p className='mb-3 text-kili-light-gray'>
          <Balancer>{texts.description}</Balancer>
        </p>
        <div className='flex flex-col items-start gap-1'>
          <button
            className='flex gap-1 transition-colors duration-300 ease-in-out outline-none appearance-none text-kili-light-gray hover:text-kili-white focus:text-kili-white group'
            onClick={handleAccept}
          >
            <span className='hidden group-focus:block'>-</span>
            <AnimatedText text={texts.acceptButton} />
          </button>
          <div className='flex items-center gap-2'>
            <button
              className='flex gap-1 transition-colors duration-300 ease-in-out outline-none appearance-none text-kili-light-gray hover:text-kili-white focus:text-kili-white group'
              onClick={handleDecline}
            >
              <span className='hidden group-focus:block'>-</span>
              <AnimatedText text={texts.declineButton} />
            </button>
            <div
              role='tooltip'
              className={clsx(
                'text-xs text-kili-light-gray transition-opacity duration-300 ease-in-out w-full whitespace-nowrap',
                showCloseWarning ? 'opacity-100' : 'opacity-0'
              )}
            >
              ({texts.closeWarning})
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}
