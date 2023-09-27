import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import FocusTrap from 'focus-trap-react'
import CommandLine from '@/components/contact-form/CommandLine'
import Fields from '@/components/contact-form/Fields'
import Warning from '@/components/contact-form/Warning'
import { useStore } from '@/lib/store/store'
import { ArrowRightIcon } from '@/icons/ArrowRightIcon'
import { firaMonoFont } from '@/lib/utils/fonts'
import { CURSOR_STATUS } from '@/lib/constants/general'

interface Props {
  handleDrag: React.PointerEventHandler<HTMLElement>
}

export default function Form({ handleDrag }: Props) {
  const { setShowContactForm, setCursorStatus } = useStore()
  const [renderFields, setRenderFields] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [step, setStep] = useState(1)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    async function delay(): Promise<void> {
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }

    setIsLoading(true)
    await delay()

    try {
      const form = event.target as HTMLFormElement

      const status: number = 400

      if (status === 200) {
        console.log('Success')
        setSuccess(true)
        setError(false)
        form.reset()
      } else {
        throw new Error('Something went wrong')
      }
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setIsLoading(false)

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
  }

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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <FocusTrap>
      <motion.form
        onSubmit={handleSubmit}
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
          className='flex items-center h-10 gap-4 px-4 bg-kili-light-gray/30 cursor-grab active:cursor-grabbing active:select-none'
          onPointerDown={handleDrag}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <button
            aria-label='Close contact form'
            onClick={(event) => handleCloseClick(event)}
            className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full hover:bg-kili-white'
          />
          <p className='text-sm tracking-wide text-kili-white'>
            ~/kilimanjjjaro/src
          </p>
        </motion.header>
        <main
          data-lenis-prevent
          className={`relative flex items-center justify-center p-9 h-[55dvh] overflow-y-auto ${firaMonoFont} contact-form-scrollbar overscroll-contain`}
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
                {step <= 2 && !error && (
                  <span>Please, fill in the form =)</span>
                )}
                {step === 3 && !error && (
                  <span>You can press Tab + Enter to send</span>
                )}
                {error && <span>Something went wrong =(</span>}
              </div>
              <Fields step={step} setStep={setStep} />
            </div>
          )}
          {showWarning && <Warning setShowWarning={setShowWarning} />}
        </main>
        {renderFields && (
          <button
            className={clsx(
              'flex absolute bottom-8 right-9 items-center gap-2 text-lg text-kili-white bg-[#030303] py-1 px-3',
              isLoading && 'cursor-not-allowed animate-pulse'
            )}
            disabled={isLoading}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          >
            {error && !isLoading && (
              <>
                Try again!
                <ArrowRightIcon className='w-3' />
              </>
            )}
            {!error && !success && !isLoading && (
              <>
                Send message
                <ArrowRightIcon className='w-3' />
              </>
            )}
            {success && !error && 'Sent!'}
            {isLoading && 'Sending...'}
          </button>
        )}
      </motion.form>
    </FocusTrap>
  )
}
