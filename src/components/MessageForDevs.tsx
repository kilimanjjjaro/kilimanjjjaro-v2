'use client'

import { useEffect } from 'react'

const EMAIL_ADDRESS = 'hello@kilimanjjjaro.com'
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
        '%cWe can talk by email %chello@kilimanjjjaro.com',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
      )

      window.open(`mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}`)

      return 'Opening email app...'
    }

    const linkedin = () => {
      console.info(
        '%cYou can find me on LinkedIn %clinkedin.com/in/kilimanjjjaro/',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
      )

      window.open('https://www.linkedin.com/in/kilimanjjjaro/')

      return 'Opening LinkedIn...'
    }

    const github = () => {
      console.info(
        '%cYou can find me on GitHub %cgithub.com/kilimanjjjaro',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 20px 20px 10px 20px;',
        'color: #F8F8F8; background-color: #090909; font-size: 20px; padding: 10px 20px 20px 20px;'
      )

      window.open('https://github.com/kilimanjjjaro')

      return 'Opening GitHub...'
    }

    window.email = email
    window.linkedin = linkedin
    window.github = github
  }, [])

  return null
}
