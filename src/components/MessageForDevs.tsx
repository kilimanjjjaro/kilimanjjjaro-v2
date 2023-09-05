'use client'

import { useEffect } from 'react'

const EMAIL_ADDRESS = 'hello@kilimanjjjaro.com'
const EMAIL_SUBJECT = 'From your console log 🙃'
const LINKEDIN_URL = 'https://www.linkedin.com/in/kilimanjjjaro'
const GITHUB_URL = 'https://github.com/kilimanjjjaro'

export default function MessageForDevs() {
  useEffect(() => {
    console.info(
      "%cHey! If you are interested in how it works, let's talk and I'll give you a hand! 🤛 %cWrite email() or linkedin() or github()",
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
      'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
    )

    const email = () => {
      console.info(
        `%cWe can talk by email. ${EMAIL_ADDRESS}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(`mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}`)

      return 'Opening email app...'
    }

    const linkedin = () => {
      console.info(
        `%cYou can find me on LinkedIn. ${LINKEDIN_URL}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(LINKEDIN_URL)

      return 'Opening LinkedIn...'
    }

    const github = () => {
      console.info(
        `%cYou can find me on GitHub. ${GITHUB_URL}`,
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 18px 20px 18px 20px;'
      )

      window.open(GITHUB_URL)

      return 'Opening GitHub...'
    }

    window.email = email
    window.linkedin = linkedin
    window.github = github
  }, [])

  return null
}
