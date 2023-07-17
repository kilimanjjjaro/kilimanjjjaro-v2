'use client'

import TextButton from '@/components/shared/TextButton'

export default function LetsTalkButton() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <TextButton
      className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
      handler={handleClick}
      underlined
    >
      Let's talk!
    </TextButton>
  )
}
