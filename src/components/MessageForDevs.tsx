'use client'

import { useEffect } from 'react'
import { ADMIN_EMAIL, SOCIAL_LINKS } from '@/lib/constants/general'

const EMAIL_SUBJECT = 'From your console log 🙃'

export default function MessageForDevs() {
  useEffect(() => {
    console.info(
      "%cHey! If you are interested in how it works, let's talk and I'll give you a hand! 🤛 %cWrite email() or linkedin() or github()",
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
        `%cYou can find me on: ${SOCIAL_LINKS[1].link}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(SOCIAL_LINKS[1].link)

      return 'Opening LinkedIn...'
    }

    const github = () => {
      console.info(
        `%cYou can find me on: ${SOCIAL_LINKS[0].link}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(SOCIAL_LINKS[0].link)

      return 'Opening GitHub...'
    }

    window.email = email
    window.linkedin = linkedin
    window.github = github
  }, [])

  return null
}
