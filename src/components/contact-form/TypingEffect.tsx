import { useEffect, useRef } from 'react'
// @ts-expect-error
import { type } from '@camwiegert/typical'

interface Props {
  text: string
}

export default function TypingEffect({ text }: Props) {
  const typicalRef = useRef(null)

  useEffect(() => {
    type(typicalRef.current, text)
  }, [text])

  return <span ref={typicalRef} className='mr-1' />
}
