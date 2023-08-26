'use client'

import TextButton from '@/components/shared/TextButton'
import { useLenis } from '@studio-freight/react-lenis'

export default function SeeProjectsButton() {
  const lenis = useLenis()

  const handleClick = () => {
    const elementRef = document.getElementById('projects')

    if (elementRef != null) {
      lenis.scrollTo(elementRef, {
        duration: 2
      })
    }
  }

  return (
    <TextButton
      className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
      handler={handleClick}
      underlined
    >
      See projects
    </TextButton>
  )
}
