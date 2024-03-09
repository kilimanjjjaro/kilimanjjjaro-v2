'use client'

import { useEffect } from 'react'
import {
  EMAIL_SUBJECT,
  GITHUB_URL,
  LINKEDIN_URL
} from '@/lib/constants/message-for-devs'
import { ADMIN_EMAIL } from '@/lib/constants/general'

export default function MessageForDevs() {
  useEffect(() => {
    console.info(
      "%cHey! If you are interested in how it works, let's talk and I'll give you a hand! 🤛 %cWrite kili_email() or kili_linkedin() or kili_github()",
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
    )

    const email = () => {
      console.info(
        `%cWe can talk by: ${ADMIN_EMAIL}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(`mailto:${ADMIN_EMAIL}?subject=${EMAIL_SUBJECT}`)

      return 'Opening email app...'
    }

    const linkedin = () => {
      console.info(
        `%cYou can find me on: ${LINKEDIN_URL}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(LINKEDIN_URL)

      return 'Opening LinkedIn...'
    }

    const github = () => {
      console.info(
        `%cYou can find me on: ${GITHUB_URL}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(GITHUB_URL)

      return 'Opening GitHub...'
    }

    window.kili_email = email
    window.kili_linkedin = linkedin
    window.kili_github = github
  }, [])

  return null
}
