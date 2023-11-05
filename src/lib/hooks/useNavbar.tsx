import { useCallback, useEffect, useState } from 'react'
import { NAVIGATION_VARIANTS } from '@/lib/constants/general'

export default function useNavbar() {
  const [variant, setVariant] = useState(NAVIGATION_VARIANTS.large)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos <= 1) {
      setVariant(NAVIGATION_VARIANTS.large)
    }

    if (currentScrollPos > 1) {
      setVariant(NAVIGATION_VARIANTS.small)
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
