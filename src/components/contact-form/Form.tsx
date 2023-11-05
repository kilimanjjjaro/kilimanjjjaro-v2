import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import CommandLine from '@/components/contact-form/CommandLine'
import Fields from '@/components/contact-form/Fields'
import Warning from '@/components/contact-form/Warning'
import SubmitButton from '@/components/contact-form/SubmitButton'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import sendForm from '@/lib/actions/sendForm'
import { firaMonoFont } from '@/lib/utils/fonts'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { useScopedI18n } from '@/lib/i18n/client'
import { FORM_DEFAULT_STATE } from '@/lib/constants/form'

interface Props {
  handleDrag: React.PointerEventHandler<HTMLElement>
}

export default function Form({ handleDrag }: Props) {
  const t = useScopedI18n('contactForm')
  const [state, formAction] = useFormState(sendForm, FORM_DEFAULT_STATE)
  const { setShowContactForm, setCursorStatus } = useStore()
  const formRef = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [renderFields, setRenderFields] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [step, setStep] = useState(1)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!showWarning && event.key === 'Escape') {
        setShowWarning(true)
      }

      if (showWarning && event.key === 'Enter') {
        event.preventDefault()
        setShowContactForm(false)
      }

      if (showWarning && event.key !== 'Enter') {
        setShowWarning(false)
      }
    },
    [setShowContactForm, showWarning]
  )

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setShowContactForm(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderFields(true)
    }, 6600)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (state.success) {
      setSuccess(true)
      setError(false)

      const timeout = setTimeout(() => {
        setSuccess(false)
        setStep(1)
        formRef.current?.reset()
      }, 2000)

      return () => {
        clearTimeout(timeout)
      }
    }

    if (state.error) {
      setError(true)
      setSuccess(false)

      formRef.current?.focus()
    }
  }, [state])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const renderWelcomeMessage = step <= 2 && !error && !success
  const renderSuccessMessage = success && !error
  const renderSuggestionMessage = step > 2 && !error && !success
  const renderErrorMessage = error && !success

  return (
    <motion.form
      aria-label='Contact form'
      ref={formRef}
      action={formAction}
      className='w-[700px] bg-[#030303] relative rounded-md shadow-lg overflow-hidden pointer-events-auto'
      initial={{
        y: '90dvh',
        scale: 0.5
      }}
      animate={{
        y: '0dvh',
        scale: 1
      }}
      exit={{
        y: '90dvh',
        scale: 0.5,
        transition: {
          duration: 1,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    >
      <motion.header
        className='flex items-center h-10 gap-4 px-4 bg-monospace-light-gray/30 cursor-grab active:cursor-grabbing active:select-none'
        onPointerDown={handleDrag}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      >
        <Button
          aria-label='Close contact form'
          onClick={(event) => handleCloseClick(event)}
          className='w-3 h-3 transition-colors duration-1000 bg-red-600 rounded-full xl:hover:bg-monospace-white'
        />
        <p className='text-sm tracking-wide text-monospace-white'>
          ~/monospace/src
        </p>
      </motion.header>
      <main
        data-lenis-prevent
        className={`relative flex items-center justify-center p-9 h-[55dvh] overflow-y-auto ${firaMonoFont} contact-form overscroll-contain`}
      >
        {!renderFields && <CommandLine />}
        {renderFields && (
          <div className='flex flex-col w-full h-full gap-6 py-6'>
            <div
              className={clsx(
                'absolute top-0 left-0 flex items-center justify-between bg-[#00ff00] w-full h-6 px-4 text-sm',
                error && 'bg-red-600'
              )}
            >
              <span>GNU nano 2.8.4</span>
              {renderWelcomeMessage && <span>{t('welcomeMessage')}</span>}
              {renderSuggestionMessage && <span>{t('suggestionMessage')}</span>}
              {renderSuccessMessage && <span>{t('successMessage')}</span>}
              {renderErrorMessage && <span>{t('errorMessage')}</span>}
            </div>
            <Fields step={step} setStep={setStep} />
          </div>
        )}
        {showWarning && <Warning setShowWarning={setShowWarning} />}
      </main>
      {renderFields && (
        <SubmitButton
          error={error}
          success={success}
          shouldFocus={step === 4}
        />
      )}
    </motion.form>
  )
}
