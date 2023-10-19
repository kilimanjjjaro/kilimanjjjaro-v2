import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '@/lib/store/store'
import Button from '@/components/shared/Button'

export default function NavbarButton() {
  const { setNavbarStatus, navbarStatus } = useStore()

  return (
    <Button
      className='relative flex items-center justify-center -mt-[2px] cursor-pointer w-7 h-7 group'
      aria-label='Toggle navigation menu'
      onClick={() => setNavbarStatus(!navbarStatus)}
    >
      <AnimatePresence initial={false}>
        {navbarStatus ? (
          <div
            className='absolute flex flex-col items-center justify-center w-full gap-2'
            key='close-button'
          >
            <motion.span
              key='top-line'
              className='block h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white translate-y-[5px] rotate-[135deg]'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: {
                  duration: 0.8,
                  ease: 'easeInOut'
                }
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.8
              }}
            />
            <motion.span
              className='block h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white translate-y-[-5px] rotate-[-135deg]'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: {
                  duration: 0.8,
                  ease: 'easeInOut'
                }
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.9
              }}
            />
          </div>
        ) : (
          <div
            className='absolute flex flex-col w-full gap-2'
            key='open-button'
          >
            <motion.span
              className='block h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: {
                  duration: 0.8,
                  ease: 'easeInOut'
                }
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.8
              }}
            />
            <motion.span
              className='block h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: {
                  duration: 0.8,
                  ease: 'easeInOut',
                  delay: 0.1
                }
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.9
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </Button>
  )
}
