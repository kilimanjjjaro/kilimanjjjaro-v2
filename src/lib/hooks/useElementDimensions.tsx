import { useEffect, useState } from 'react'
import useMediaQuery from '@lib/hooks/useMediaQuery'

interface Props {
  ref: React.RefObject<HTMLElement>
}

export default function useElementDimensions({ ref }: Props) {
  const { isDesktop } = useMediaQuery()
  const [elementDimensions, setElementDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const elementRef = ref.current

    if (elementRef === null) return

    const { width, height } = elementRef.getBoundingClientRect()

    setElementDimensions({
      width: Math.round(width),
      height: Math.round(height)
    })
  }, [ref, isDesktop])

  return elementDimensions
}
