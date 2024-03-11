'use client'

import { useEffect, useRef } from 'react'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { CURSOR_STATUS } from '@/lib/constants/general'

interface Props {
  step: number
  setStep: (step: number) => void
}

export default function Fields({ step, setStep }: Props) {
  const t = useScopedI18n('contactForm.fields')
  const { setCursorStatus } = useStore()
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
      <label className='flex flex-col transition-colors text-sm xl:text-lg duration-1000 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        {t('name')}:
        <input
          ref={nameInputRef}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 2 })}
          onChange={() => setStep(1)}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          className='placeholder-opacity-100 bg-transparent outline-none text-kili-white focus:outline-none'
          type='text'
          name='name'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-1000 text-sm xl:text-lg ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        {t('email')}:
        <input
          ref={emailInputRef}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 3 })}
          onChange={() => setStep(2)}
          className='placeholder-opacity-100 bg-transparent outline-none text-kili-white focus:outline-none'
          type='email'
          name='email'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-1000 text-sm xl:text-lg ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        {t('message')}:
        <textarea
          ref={textAreaRef}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          onChange={handleChange}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 4 })}
          className='bg-transparent outline-none resize-none h-7 text-kili-white focus:outline-none peer/message'
          name='message'
          rows={1}
          required
        />
      </label>
    </>
  )
}
