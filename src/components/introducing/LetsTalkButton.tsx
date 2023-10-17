'use client'

import TextButton from '@/components/shared/TextButton'
import { useStore } from '@/lib/store/store'

export default function LetsTalkButton({
  letsTalkButton
}: {
  letsTalkButton: string
}) {
  const { setShowContactForm } = useStore()

  return (
    <TextButton
      className='order-2 text-2xl xl:text-3xl xl:order-1 text-kili-white before:bg-kili-white after:bg-kili-white'
      onClick={() => setShowContactForm(true)}
      underlined
    >
      {letsTalkButton}
    </TextButton>
  )
}
