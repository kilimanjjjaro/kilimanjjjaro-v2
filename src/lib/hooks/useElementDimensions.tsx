import { useEffect, useState } from 'react'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { UNMEASURED_WIDTH } from '@/lib/constants/text'

interface Props {
  ref: React.RefObject<HTMLElement | null>
}

export default function useElementDimensions({ ref }: Props) {
  const { isDesktop } = useMediaQuery()
  const [elementDimensions, setElementDimensions] = useState({
    width: UNMEASURED_WIDTH,
    height: UNMEASURED_WIDTH
  })

  useEffect(() => {
    const { current: element } = ref

    if (element === null) return

    const { width, height } = element.getBoundingClientRect()

    setElementDimensions({
      width: Math.round(width),
      height: Math.round(height)
    })
  }, [ref, isDesktop])

  return elementDimensions
}
