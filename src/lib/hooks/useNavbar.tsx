import { useCallback, useEffect, useState } from 'react'

export default function useNavbar() {
  const [version, setVersion] = useState(1)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos <= window.innerHeight * 0.1) {
      setVersion(1)
    }

    if (currentScrollPos > window.innerHeight * 0.1) {
      setVersion(2)
    }
  }, [])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { version }
}
