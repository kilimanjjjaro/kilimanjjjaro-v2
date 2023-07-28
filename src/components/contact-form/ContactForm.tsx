import { motion } from 'framer-motion'
import CommandLine from '@/components/contact-form/CommandLine'
import Fields from '@/components/contact-form/Fields'
import { ArrowRightIcon } from '@/icons/ArrowRightIcon'
import { useStore } from '@/store/store'
import { firaMonoFont } from '@/utils/fonts'
import { CURSOR_STATUS } from '@/constants/general'

interface Props {
  handleDrag: React.PointerEventHandler<HTMLElement>
}

export default function ContactForm({ handleDrag }: Props) {
  const { setShowContactForm, setCursorStatus } = useStore()

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setShowContactForm(false)
  }

  return (
    <motion.form
      className='w-[700px] bg-[#030303] rounded-md overflow-hidden shadow-lg pointer-events-auto'
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
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HIDDEN)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      >
        <button
          onClick={(event) => handleCloseClick(event)}
          className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full hover:bg-kili-white'
        />
        <p className='text-sm tracking-wide text-kili-white'>
          ~/kilimanjjjaro/src
        </p>
      </motion.header>
      <main
        data-lenis-prevent
        className={`flex flex-col gap-6 p-9 h-[65dvh] overflow-y-auto ${firaMonoFont} contact-form-scrollbar overscroll-contain`}
      >
        <CommandLine />
        <Fields />
      </main>
      <footer className='bg-[#101010] flex gap-4 justify-between items-center px-4 h-10 text-sm tracking-wide text-kili-white relative'>
        <p className='animate-pulse'>Please, fill in the form</p>
        <button type='submit' className='flex items-center gap-1'>
          Send message <ArrowRightIcon className='w-[10px]' />
        </button>
      </footer>
    </motion.form>
  )
}
