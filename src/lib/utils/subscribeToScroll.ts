export default function subscribeToScroll(callback: () => void) {
  window.addEventListener('scroll', callback)

  return () => {
    window.removeEventListener('scroll', callback)
  }
}
