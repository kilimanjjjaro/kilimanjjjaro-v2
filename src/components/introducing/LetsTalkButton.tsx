'use client'

import TextButton from '@/components/shared/TextButton'

export default function LetsTalkButton() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <TextButton handler={handleClick} className='text-3xl text-kili-white'>
      Let's talk!
    </TextButton>
  )
}
