import subscribeToScroll from '@/lib/utils/subscribeToScroll'

export default function watchScroll(callback: () => void) {
  const frameId = requestAnimationFrame(callback)
  const unsubscribe = subscribeToScroll(callback)

  return () => {
    cancelAnimationFrame(frameId)
    unsubscribe()
  }
}
