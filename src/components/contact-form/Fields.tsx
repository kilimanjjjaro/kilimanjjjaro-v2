'use client'

import { useEffect, useRef } from 'react'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import { FormStep } from '@/lib/constants/form'

interface Props {
  step: FormStep
  setStep: (step: FormStep) => void
}

export default function Fields({ step, setStep }: Props) {
  const t = useScopedI18n('contactForm.fields')
  const { setCursorStatus } = useStore()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    const { current: textArea } = textAreaRef

    if (textArea === null) return

    setStep(FormStep.Message)

    const { scrollHeight } = textArea
    textArea.style.height = `${scrollHeight}px`
  }

  const handleKeyDown = ({
    event,
    nextStep
  }: {
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    nextStep: FormStep
  }) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (step <= FormStep.Message) {
        event.preventDefault()

        setStep(nextStep)
      }
    }
  }

  useEffect(() => {
    if (step === FormStep.Name) {
      nameInputRef.current?.focus()
    }

    if (step === FormStep.Email) {
      emailInputRef.current?.focus()
    }

    if (step === FormStep.Message) {
      textAreaRef.current?.focus()
    }
  }, [step])

  return (
    <>
      <label className='flex flex-col transition-colors text-sm xl:text-lg duration-1000 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        {t('name')}:
        <input
          ref={nameInputRef}
          onKeyDown={(event) => {
            handleKeyDown({ event, nextStep: FormStep.Email })
          }}
          onChange={() => {
            setStep(FormStep.Name)
          }}
          onMouseEnter={() => {
            setCursorStatus(CURSOR_STATUS.HOVER)
          }}
          onMouseLeave={() => {
            setCursorStatus(CURSOR_STATUS.DEFAULT)
          }}
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
          onMouseEnter={() => {
            setCursorStatus(CURSOR_STATUS.HOVER)
          }}
          onMouseLeave={() => {
            setCursorStatus(CURSOR_STATUS.DEFAULT)
          }}
          onKeyDown={(event) => {
            handleKeyDown({ event, nextStep: FormStep.Message })
          }}
          onChange={() => {
            setStep(FormStep.Email)
          }}
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
          onMouseEnter={() => {
            setCursorStatus(CURSOR_STATUS.HOVER)
          }}
          onMouseLeave={() => {
            setCursorStatus(CURSOR_STATUS.DEFAULT)
          }}
          onChange={handleChange}
          onKeyDown={(event) => {
            handleKeyDown({ event, nextStep: FormStep.Submit })
          }}
          className='bg-transparent outline-none resize-none h-7 text-kili-white focus:outline-none peer/message'
          name='message'
          rows={1}
          required
        />
      </label>
    </>
  )
}
