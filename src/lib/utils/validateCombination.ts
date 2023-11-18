import { SUCCESS_KEY_COMBINATION } from '@/lib/constants/general'

export const validateKeyCombination = (combination: string[]) => {
  if (combination.length !== SUCCESS_KEY_COMBINATION.length) {
    return false
  }

  return combination.every((element, index) => {
    return element === SUCCESS_KEY_COMBINATION[index]
  })
}
