import { motion } from 'framer-motion'
import CommandLine from '@/components/contact-form/CommandLine'
import Fields from '@/components/contact-form/Fields'
import { useStore } from '@/store/store'
import { firaMonoFont } from '@/utils/fonts'
import { CURSOR_STATUS } from '@/constants/general'
import FocusTrap from 'focus-trap-react'
import { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@/icons/ArrowRightIcon'

interface Props {
  handleDrag: React.PointerEventHandler<HTMLElement>
}

export default function ContactForm({ handleDrag }: Props) {
  const { setShowContactForm, setCursorStatus } = useStore()
  const [renderFields, setRenderFields] = useState(false)

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

  return (
    <FocusTrap>
      <motion.form
        onSubmit={() => console.log('Sending')}
        className='w-[700px] bg-[#030303] relative rounded-md overflow-hidden shadow-lg pointer-events-auto'
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
            duration: 0.7,
            ease: 'easeInOut'
          }
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut'
        }}
      >
        <motion.header
          className='bg-[#101010] flex gap-4 items-center px-4 h-10 cursor-grab active:cursor-grabbing active:select-none'
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
          className={`relative p-9 h-[55dvh] overflow-y-auto ${firaMonoFont} contact-form-scrollbar overscroll-contain`}
        >
          {!renderFields && <CommandLine />}
          {renderFields && <Fields />}
        </main>
        {renderFields && (
          <button
            type='submit'
            className='flex absolute bottom-8 right-9 items-center gap-2 text-lg text-kili-white bg-[#030303] py-1 px-3 rounded-sm hover:bg-kili-light-gray hover:text-kili-black transition-colors duration-700 ease-in-out'
          >
            Send message <ArrowRightIcon className='w-3' />
          </button>
        )}
      </motion.form>
    </FocusTrap>
  )
}
