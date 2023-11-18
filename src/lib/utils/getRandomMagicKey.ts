export const getRandomMagicKey = () => {
  const randomKey = Math.floor(Math.random() * 2)
  return randomKey.toString()
}
