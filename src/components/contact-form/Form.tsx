import { useActionState, useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import CommandLine from '@/components/contact-form/CommandLine'
import Fields from '@/components/contact-form/Fields'
import StatusBar from '@/components/contact-form/StatusBar'
import Warning from '@/components/contact-form/Warning'
import SubmitButton from '@/components/contact-form/SubmitButton'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import sendForm from '@/lib/actions/sendForm'
import { firaMonoFont } from '@/lib/utils/fonts'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import { TRANSITION } from '@/lib/constants/animation'
import {
  CONTACT_FORM_HIDDEN_STATE,
  CONTACT_FORM_VISIBLE_STATE,
  FIELDS_RENDER_DELAY_MS,
  FORM_DEFAULT_STATE,
  FormStep,
  SUCCESS_MESSAGE_DURATION_MS
} from '@/lib/constants/form'

interface Props {
  handleDrag: React.PointerEventHandler<HTMLElement>
}

export default function Form({ handleDrag }: Props) {
  const [state, formAction] = useActionState(sendForm, FORM_DEFAULT_STATE)
  const [expiredState, setExpiredState] = useState(FORM_DEFAULT_STATE)
  const { setShowContactForm, setCursorStatus } = useStore()
  const formRef = useRef<HTMLFormElement>(null)
  const success = state.success && state !== expiredState
  const { error } = state
  const [renderFields, setRenderFields] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [step, setStep] = useState(FormStep.Name)

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

  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowContactForm(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderFields(true)
    }, FIELDS_RENDER_DELAY_MS)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (state.success) {
      const timeout = setTimeout(() => {
        setExpiredState(state)
        setStep(FormStep.Name)
        formRef.current?.reset()
      }, SUCCESS_MESSAGE_DURATION_MS)

      return () => {
        clearTimeout(timeout)
      }
    }

    if (state.error) {
      formRef.current?.focus()
    }
  }, [state])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <motion.form
      aria-label='Contact form'
      ref={formRef}
      action={formAction}
      className='w-screen xl:w-[700px] bg-[#030303] relative rounded-md shadow-lg overflow-hidden pointer-events-auto'
      initial={CONTACT_FORM_HIDDEN_STATE}
      animate={CONTACT_FORM_VISIBLE_STATE}
      exit={{ ...CONTACT_FORM_HIDDEN_STATE, transition: TRANSITION }}
      transition={TRANSITION}
    >
      <motion.header
        className='flex items-center h-10 gap-4 px-4 bg-kili-light-gray/30 cursor-grab active:cursor-grabbing active:select-none'
        onPointerDown={handleDrag}
        onMouseEnter={() => {
          setCursorStatus(CURSOR_STATUS.HOVER)
        }}
        onMouseLeave={() => {
          setCursorStatus(CURSOR_STATUS.DEFAULT)
        }}
      >
        <Button
          aria-label='Close contact form'
          onClick={(event) => {
            handleCloseClick(event)
          }}
          className='w-3 h-3 transition-colors duration-1000 bg-red-600 rounded-full xl:hover:bg-kili-white'
        />
        <p className='text-sm tracking-wide text-kili-white'>
          ~/kilimanjjjaro/src
        </p>
      </motion.header>
      <main
        data-lenis-prevent
        className={`relative flex items-center justify-center p-6 xl:p-9 h-[80dvh] xl:h-[55dvh] overflow-y-auto ${firaMonoFont} contact-form overscroll-contain`}
      >
        {!renderFields && <CommandLine />}
        {renderFields && (
          <div className='flex flex-col w-full h-full gap-6 py-6'>
            <StatusBar step={step} error={error} success={success} />
            <Fields step={step} setStep={setStep} />
          </div>
        )}
        {showWarning && <Warning setShowWarning={setShowWarning} />}
      </main>
      {renderFields && (
        <SubmitButton
          error={error}
          success={success}
          shouldFocus={step === FormStep.Submit}
        />
      )}
    </motion.form>
  )
}
