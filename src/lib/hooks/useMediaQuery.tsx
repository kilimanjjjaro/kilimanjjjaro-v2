import { useSyncExternalStore } from 'react'
import subscribeToResize from '@/lib/utils/subscribeToResize'
import getViewport from '@/lib/utils/getViewport'
import { Viewport } from '@/lib/constants/breakpoints'

export default function useMediaQuery() {
  const viewport = useSyncExternalStore(
    subscribeToResize,
    getViewport,
    () => Viewport.Unknown
  )

  return {
    isMobile: viewport === Viewport.Mobile,
    isTablet: viewport === Viewport.Tablet,
    isDesktop: viewport === Viewport.Desktop
  }
}
