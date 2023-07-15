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
      className='fixed inset-0 items-end justify-start hidden p-8 bg-kili-dark-gray'
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
    </motion.nav>
  )
}
