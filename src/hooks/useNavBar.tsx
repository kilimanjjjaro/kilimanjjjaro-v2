import { useCallback, useEffect, useRef, useState } from 'react'

export default function useNavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const prevScrollPos = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos.current > currentScrollPos

    prevScrollPos.current =
      prevScrollPos.current !== currentScrollPos
        ? currentScrollPos
        : prevScrollPos.current

    setIsVisible((prevState) => {
      if (prevState !== isScrollingUp) {
        return isScrollingUp
      } else {
        return prevState
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { isVisible }
}
