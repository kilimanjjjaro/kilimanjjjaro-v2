import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { getRandomMagicKey } from '@/lib/utils/getRandomMagicKey'
import { MAGIC_KEYS } from '@/lib/constants/general'

export default function MagicKeys() {
  const containerRef = useRef<HTMLDivElement>(null)
  const keysRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const updateText = useCallback(() => {
    if (textRef.current === null) return

    const magicTextEl = textRef.current

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
  }, [])

  const randomizeKeys = useCallback(() => {
    if (keysRef.current === null) return

    const magicKeysEl = keysRef.current
    const keys = Array.from(magicKeysEl.children) as HTMLElement[]

    keys.forEach((key, index) => {
      setTimeout(() => {
        key.innerText = getRandomMagicKey()
      }, index * 50)
    })
  }, [])

  const setCorrectKeys = useCallback(() => {
    if (keysRef.current === null) return

    const magicKeysEl = keysRef.current
    const keys = Array.from(magicKeysEl.children) as HTMLElement[]

    keys.forEach((key, index) => {
      setTimeout(() => {
        key.innerText = MAGIC_KEYS[index]
      }, index * 50)
    })
  }, [])

  useEffect(() => {
    if (containerRef.current == null) return

    const containerEl = containerRef.current

    randomizeKeys()

    let timeout: NodeJS.Timeout

    const handleMouseEnter = () => {
      updateText()

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        setCorrectKeys()
      }, 200)
    }

    const handleMouseLeave = () => {
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
  }, [randomizeKeys, setCorrectKeys, updateText])

  return (
    <div
      ref={containerRef}
      className='flex gap-2 font-geist-mono text-sm overflow-hidden'
    >
      <motion.span
        ref={textRef}
        className='text-monospace-light-gray mr-0.5'
        initial={{ y: '118%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
        exit={{
          y: '118%',
          transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
        }}
      >
        Magic keys
      </motion.span>
      <div ref={keysRef} className='flex gap-2'>
        {MAGIC_KEYS.map((key, index) => (
          <motion.kbd
            key={key}
            className='bg-monospace-light-gray px-1.5 rounded-sm'
            initial={{ y: '118%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              ease: [0.77, 0, 0.18, 1],
              delay: index * 0.05
            }}
            exit={{
              y: '118%',
              transition: {
                duration: 0.7,
                ease: [0.77, 0, 0.18, 1],
                delay: index * 0.05
              }
            }}
          >
            {key}
          </motion.kbd>
        ))}
      </div>
    </div>
  )
}
