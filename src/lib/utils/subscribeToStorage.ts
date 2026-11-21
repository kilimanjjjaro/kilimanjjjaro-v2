export default function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener('storage', callback)
  }
}
