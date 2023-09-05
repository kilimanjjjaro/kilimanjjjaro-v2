'use client'

import { useEffect } from 'react'

const EMAIL_ADDRESS = 'hello@kilimanjjjaro.com'
const EMAIL_SUBJECT = 'From your console log'

export default function MessageForDevs() {
  useEffect(() => {
    console.info(
      "%cHey! %cIf you are interested in how it works, let's talk and I'll give you a hand! 🤛 %cType letsTalk()",
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 10px 20px;',
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 20px 20px;',
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 18px 20px;'
    )

    const letsTalk = () => {
      console.info(
        '%cWe can talk by email %chello@kilimanjjjaro.com',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
      )

      window.open(`mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}`)
    }

    window.letsTalk = letsTalk
  }, [])

  return null
}
