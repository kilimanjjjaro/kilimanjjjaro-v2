import { useCallback, useEffect, useRef, useState } from 'react'

export default function useNavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [version, setVersion] = useState(1)
  const prevScrollPos = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos.current > currentScrollPos

    if (currentScrollPos < 10) {
      setVersion(1)
    }

    if (currentScrollPos >= 40) {
      setVersion(2)
    }

    if (currentScrollPos < window.innerHeight / 2) return

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
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { isVisible, version }
}
