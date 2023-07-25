import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { SECTIONS, CURSOR_STATUS } from '@/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/constants/variants'

export default function Navigation() {
  const { navBarStatus, setNavBarStatus, setCursorStatus } = useStore()
  const [animateId, setAnimateId] = useState('')
  const router = useRouter()

  const handleClick = async (hash: string) => {
    setNavBarStatus(false)
    router.push(`/#${hash}`)
  }

  const handleMouseEnter = (id: string) => {
    setCursorStatus(CURSOR_STATUS.HOVER)
    setAnimateId(id)
  }

  const handleMouseLeave = () => {
    setCursorStatus(CURSOR_STATUS.DEFAULT)
    setAnimateId('')
  }

  return (
    <motion.nav
      className='fixed inset-0 items-end justify-between hidden p-8 bg-kili-dark-gray'
      variants={NAVBAR_VARIANTS}
      initial='closed'
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul className='flex flex-col gap-5'>
        {SECTIONS.map((section) => (
          <li key={section.slug} className='overflow-hidden'>
            <motion.button
              className='text-9xl text-kili-white'
              variants={NAVBAR_LI_VARIANTS}
              onClick={async () => await handleClick(section.slug)}
              onMouseEnter={() => handleMouseEnter(section.slug)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.span
                className='block translate-y-0 opacity-0'
                animate={
                  animateId === section.slug
                    ? {
                        y: ['0%', '-105%', '105%', '105%', '0%'],
                        opacity: [1, 1, 0, 1, 1]
                      }
                    : {
                        y: '0%',
                        opacity: 1
                      }
                }
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  times: [0, 0.499, 0.5, 0.509, 1]
                }}
              >
                {section.name}
              </motion.span>
            </motion.button>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col items-end gap-5'>
        <li className='overflow-hidden'>
          <motion.a
            className='block text-5xl duration-700 ease-in-out text-kili-white hover:text-kili-light-gray'
            href='#'
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            initial={{ y: '110%', rotate: 4 }}
            animate={
              navBarStatus ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 4 }
            }
            transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1], delay: 0.2 }}
          >
            GitHub
          </motion.a>
        </li>
        <li className='overflow-hidden'>
          <motion.a
            className='block text-5xl duration-700 ease-in-out text-kili-white hover:text-kili-light-gray'
            href='#'
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            initial={{ y: '110%', rotate: 4 }}
            animate={
              navBarStatus ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 4 }
            }
            transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1] }}
          >
            LinkedIn
          </motion.a>
        </li>
      </ul>
    </motion.nav>
  )
}
