'use client'

import { useEffect, useRef } from 'react'
import { useScopedI18n } from '@lib/i18n/client'

interface Props {
  step: number
  setStep: (step: number) => void
}

export default function Fields({ step, setStep }: Props) {
  const t = useScopedI18n('contactForm.fields')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    if (textAreaRef.current === null) return

    setStep(3)

    const scrollHeight = textAreaRef.current.scrollHeight
    textAreaRef.current.style.height = `${scrollHeight}px`
  }

  const handleKeyDown = ({
    event,
    nextStep
  }: {
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    nextStep: number
  }) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (step <= 3) {
        event.preventDefault()

        setStep(nextStep)
      }
    }
  }

  useEffect(() => {
    if (step === 1) {
      nameInputRef.current?.focus()
    }

    if (step === 2) {
      emailInputRef.current?.focus()
    }

    if (step === 3) {
      textAreaRef.current?.focus()
    }
  }, [step])

  return (
    <>
      <label className='flex flex-col text-monospace-light-gray transition-colors duration-700 ease-in-out focus-within:text-monospace-white'>
        {t('name')}:
        <input
          ref={nameInputRef}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 2 })}
          onChange={() => setStep(1)}
          className='bg-transparent text-lg text-monospace-white placeholder-opacity-100 outline-none focus:outline-none'
          type='text'
          name='name'
          required
        />
      </label>
      <label className='flex flex-col text-monospace-light-gray transition-colors duration-700 ease-in-out focus-within:text-monospace-white'>
        {t('email')}:
        <input
          ref={emailInputRef}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 3 })}
          onChange={() => setStep(2)}
          className='bg-transparent text-lg text-monospace-white placeholder-opacity-100 outline-none focus:outline-none'
          type='email'
          name='email'
          required
        />
      </label>
      <label className='flex flex-col text-monospace-light-gray transition-colors duration-700 ease-in-out focus-within:text-monospace-white'>
        {t('message')}:
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 4 })}
          className='peer/message h-7 resize-none bg-transparent text-lg text-monospace-white outline-none focus:outline-none'
          name='message'
          rows={1}
          required
        />
      </label>
    </>
  )
}
