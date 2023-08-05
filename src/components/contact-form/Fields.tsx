'use client'

import { useEffect, useRef } from 'react'

interface Props {
  step: number
  setStep: (step: number) => void
}

export default function Fields({ step, setStep }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    if (textAreaRef.current === null) return

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
      if (step <= 3 && nextStep !== 4) {
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
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your name:
        <input
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 2 })}
          ref={nameInputRef}
          className='text-lg placeholder-opacity-100 bg-transparent outline-none text-kili-white focus:outline-none'
          type='text'
          name='name'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your email:
        <input
          ref={emailInputRef}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 3 })}
          className='text-lg placeholder-opacity-100 bg-transparent outline-none text-kili-white focus:outline-none'
          type='email'
          name='email'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your message:
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          onKeyDown={(event) => handleKeyDown({ event, nextStep: 4 })}
          className='text-lg bg-transparent outline-none resize-none h-7 text-kili-white focus:outline-none peer/message'
          name='message'
          rows={1}
          required
        />
      </label>
    </>
  )
}
