import { SCRAMBLE_REMOVED_LETTERS } from '@/lib/constants/text'

export default function scrambleText(text: string) {
  return text
    .split('')
    .filter((character) => character !== ' ')
    .map((_, index, letters) => {
      const availableLetters = [...letters]

      availableLetters.splice(index, SCRAMBLE_REMOVED_LETTERS)

      return availableLetters[
        Math.floor(Math.random() * availableLetters.length)
      ]
    })
    .join('')
}
