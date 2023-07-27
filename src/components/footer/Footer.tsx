'use client'

import { useLenis } from '@studio-freight/react-lenis'
import TextButton from '@/components/shared/TextButton'
import { useStore } from '@/store/store'
import { ArrowCornerIcon } from '@/icons/ArrowCornerIcon'
import { CURSOR_STATUS, SECTIONS } from '@/constants/general'

const SOCIAL_LINKS = [
  { name: 'GitHub', link: '#' },
  { name: 'LinkedIn', link: '#' }
]

export default function Footer() {
  const { setCursorStatus } = useStore()
  const lenis = useLenis()

  const handleSectionClick = (slug: string) => {
    const elementRef = document.getElementById(slug)

    if (elementRef != null) {
      lenis.scrollTo(elementRef, {
        duration: 2
      })
    }
  }

  const handleLetsTalk = () => {
    console.log('clicked')
  }

  const handleGoToTop = () => {
    lenis.scrollTo(0, {
      duration: 3
    })
  }

  return (
    <footer id='lets-talk' className='px-40 pt-24 pb-16 bg-kili-black'>
      <ul className='flex justify-between mb-48'>
        {SECTIONS.filter((section) => section.slug !== 'lets-talk').map(
          (section) => (
            <li key={section.slug}>
              <TextButton
                className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
                handler={() => handleSectionClick(section.slug)}
                underlined
              >
                {section.name}
              </TextButton>
            </li>
          )
        )}
      </ul>
      <div className='flex items-end justify-between'>
        <button
          className='overflow-hidden group'
          onClick={handleLetsTalk}
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <span className='flex items-center leading-none translate-y-0 gap-14 text-kili-white text-10xl group-hover:animate-translate-y'>
            Let's talk!
            <ArrowCornerIcon className='w-10 h-10' />
          </span>
        </button>
        <ul className='flex flex-col items-end gap-4 mb-5'>
          {SOCIAL_LINKS.map((social) => (
            <li className='overflow-hidden' key={social.name}>
              <a
                className='block transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
                href={social.link}
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
              >
                {social.name}
              </a>
            </li>
          ))}
          <li className='overflow-hidden'>
            <button
              className='block transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
              onClick={handleGoToTop}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            >
              Go to top
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}
