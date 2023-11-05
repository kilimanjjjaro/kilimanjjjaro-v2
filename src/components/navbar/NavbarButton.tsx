import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'

export default function NavbarButton() {
  const { navbarStatus, setNavbarStatus } = useStore()

  return (
    <Button
      aria-label='Toggle navigation menu'
      className='absolute right-0 flex flex-col gap-2.5 text-xl text-monospace-light-gray leading-none xl:hover:text-monospace-white transition-colors duration-1000 ease-in-out'
      onClick={() => setNavbarStatus(!navbarStatus)}
    >
      <span className='relative flex flex-col items-center justify-start h-5 overflow-hidden'>
        <motion.span
          initial={{ y: '100%' }}
          animate={
            !navbarStatus
              ? {
                  y: '0%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }
              : {
                  y: '100%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }
          }
          exit={{
            y: '100%',
            transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
          }}
        >
          Menu
        </motion.span>
        <motion.span
          initial={{ y: '0%' }}
          animate={
            navbarStatus
              ? {
                  y: '-100%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }
              : {
                  y: '0%',
                  transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1] }
                }
          }
        >
          Close
        </motion.span>
      </span>
      <motion.span
        aria-hidden='true'
        className='w-full'
        initial={{ scaleX: 0, originX: 'right' }}
        animate={{
          scaleX: 1,
          transition: {
            duration: 1,
            ease: [0.65, 0.05, 0.36, 1],
            delay: 0.1
          }
        }}
        exit={{
          originX: 'left',
          scaleX: 0,
          transition: {
            duration: 1,
            ease: [0.65, 0.05, 0.36, 1]
          }
        }}
      >
        <div className='h-0.5 w-full bg-current' />
      </motion.span>
    </Button>
  )
}
