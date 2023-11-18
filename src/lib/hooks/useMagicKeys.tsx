import { useCallback, useEffect, useState } from 'react'
import { useStore } from '@/lib/store/store'
import { getRandomNumber } from '@/lib/utils/getRandomNumber'
import { validateKeyCombination } from '@/lib/utils/validateCombination'
import { MAGIC_KEYS, SUCCESS_KEY_COMBINATION } from '@/lib/constants/general'

interface Props {
  enableGame: boolean
  references: {
    containerRef: React.MutableRefObject<HTMLDivElement | null>
    keysRef: React.MutableRefObject<HTMLDivElement | null>
    textRef: React.MutableRefObject<HTMLSpanElement | null>
  }
}

export default function useMagicKeys({ enableGame, references }: Props) {
  const [currentCombination, setCurrentCombination] = useState<string[]>([])
  const successCombination = useStore((state) => state.successCombination)
  const setSuccessCombination = useStore((state) => state.setSuccessCombination)
  const [nextKey, setNextKey] = useState(SUCCESS_KEY_COMBINATION[0])
  const [wrongKey, setWrongKey] = useState('')

  const updateText = useCallback(() => {
    if (references.textRef.current === null || successCombination) return

    const magicTextEl = references.textRef.current

    const actualText = magicTextEl.innerText

    const actualFirstWord = actualText.split(' ')[0]
    const newFirstWord = actualFirstWord === 'Magic' ? 'Press' : 'Magic'

    const characters = actualFirstWord.split('')

    characters.forEach((char, index) => {
      setTimeout(() => {
        magicTextEl.innerText = magicTextEl.innerText.replace(
          char,
          newFirstWord[index]
        )
      }, index * 50)
    })
  }, [successCombination, references.textRef])

  const randomizeKeys = useCallback(() => {
    if (references.keysRef.current === null) return

    const magicKeysEl = references.keysRef.current
    const keys = Array.from(magicKeysEl.children) as HTMLDivElement[]

    keys.forEach((key, index) => {
      setTimeout(() => {
        key.innerText = getRandomNumber({ max: 2 }).toString()
      }, index * 50)
    })
  }, [references.keysRef])

  const setCorrectKeys = useCallback(() => {
    if (references.keysRef.current === null) return

    const magicKeysEl = references.keysRef.current
    const keys = Array.from(magicKeysEl.children) as HTMLDivElement[]

    keys.forEach((key, index) => {
      setTimeout(() => {
        key.innerText = MAGIC_KEYS[index].char
      }, index * 50)
    })
  }, [references.keysRef])

  useEffect(() => {
    if (references.containerRef.current == null) return

    const containerEl = references.containerRef.current

    let timeout: NodeJS.Timeout

    const handleMouseEnter = () => {
      if (successCombination) return

      updateText()

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        setCorrectKeys()
      }, 200)
    }

    const handleMouseLeave = () => {
      if (successCombination) return

      updateText()

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        randomizeKeys()
      }, 200)
    }

    containerEl.addEventListener('mouseenter', handleMouseEnter)
    containerEl.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      containerEl.removeEventListener('mouseenter', handleMouseEnter)
      containerEl.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timeout)
    }
  }, [
    randomizeKeys,
    setCorrectKeys,
    updateText,
    successCombination,
    references.containerRef
  ])

  useEffect(() => {
    if (!enableGame) return

    const isCorrect = validateKeyCombination(currentCombination)

    if (isCorrect) {
      setSuccessCombination(true)

      setTimeout(() => {
        setCurrentCombination([])
        setNextKey(SUCCESS_KEY_COMBINATION[0])
        setSuccessCombination(false)
        randomizeKeys()
      }, 5000)
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const keyCode = event.code

      if (successCombination) setSuccessCombination(false)

      if (keyCode === nextKey) {
        setCurrentCombination((prev) => [...prev, keyCode])
        setNextKey(SUCCESS_KEY_COMBINATION[currentCombination.length + 1])
        setWrongKey('')
      } else {
        setWrongKey(nextKey)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [
    currentCombination,
    nextKey,
    successCombination,
    enableGame,
    randomizeKeys,
    setSuccessCombination
  ])

  useEffect(() => {
    randomizeKeys()
  }, [randomizeKeys])

  return {
    currentCombination,
    wrongKey,
    successCombination
  }
}
