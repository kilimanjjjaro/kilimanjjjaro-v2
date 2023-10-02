'use client'

import TextButton from '@/components/shared/TextButton'
import { useStore } from '@/lib/store/store'

export default function LetsTalkButton({ buttonText }: { buttonText: string }) {
  const { setShowContactForm } = useStore()

  return (
    <TextButton
      className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
      onClick={() => setShowContactForm(true)}
      underlined
    >
      {buttonText}
    </TextButton>
  )
}
