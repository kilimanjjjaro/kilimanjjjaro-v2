export default function subscribeToResize(callback: () => void) {
  window.addEventListener('resize', callback)

  return () => {
    window.removeEventListener('resize', callback)
  }
}
