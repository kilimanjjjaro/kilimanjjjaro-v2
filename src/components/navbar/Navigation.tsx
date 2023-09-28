import { motion } from 'framer-motion'
import TextLink from '@/components/shared/TextLink'
import { useStore } from '@/lib/store/store'
import { SECTIONS, CURSOR_STATUS } from '@/lib/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/lib/constants/variants'

export default function Navigation() {
  const { navBarStatus, setNavBarStatus, setCursorStatus } = useStore()

  return (
    <motion.nav
      className='fixed inset-0 z-40 items-end justify-between hidden p-8 bg-kili-dark-gray'
      variants={NAVBAR_VARIANTS}
      initial='closed'
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul className='flex flex-col gap-4'>
        {SECTIONS.map((section) => (
          <li key={section.slug} className='overflow-hidden'>
            <motion.span
              className='block overflow-hidden text-[12vh] leading-none text-kili-white group'
              variants={NAVBAR_LI_VARIANTS}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            >
              <TextLink
                href={`/#${section.slug}`}
                onClick={() => setNavBarStatus(false)}
              >
                <span className='block py-1 group-hover:animate-translate-y'>
                  {section.name}
                </span>
              </TextLink>
            </motion.span>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col items-end gap-5 text-5xl text-kili-white'>
        <li className='overflow-hidden group'>
          <motion.a
            href='#'
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            initial={{ y: '110%', rotate: 4 }}
            animate={
              navBarStatus ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 4 }
            }
            transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1], delay: 0.2 }}
          >
            <span className='block transition-transform duration-700 ease-in-out group-hover:animate-translate-y'>
              GitHub
            </span>
          </motion.a>
        </li>
        <li className='overflow-hidden group'>
          <motion.a
            href='#'
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            initial={{ y: '110%', rotate: 4 }}
            animate={
              navBarStatus ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 4 }
            }
            transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1] }}
          >
            <span className='block transition-transform duration-700 ease-in-out group-hover:animate-translate-y'>
              LinkedIn
            </span>
          </motion.a>
        </li>
      </ul>
    </motion.nav>
  )
}
