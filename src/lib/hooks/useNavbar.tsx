import { useCallback, useEffect, useState } from 'react'
import { NAVIGATION_VARIANTS } from '@/lib/constants/general'

export default function useNavbar() {
  const [variant, setVariant] = useState(NAVIGATION_VARIANTS.LARGE)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos <= 1) {
      setVariant(NAVIGATION_VARIANTS.LARGE)
    }

    if (currentScrollPos > 1) {
      setVariant(NAVIGATION_VARIANTS.SMALL)
    }
  }, [])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { variant }
}
