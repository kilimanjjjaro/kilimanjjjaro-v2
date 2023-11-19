import { useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import useMagicKeys from '@/lib/hooks/useMagicKeys'
import { MAGIC_KEYS } from '@/lib/constants/general'

export default function MagicKeys() {
  const [enableGame, setEnableGame] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const keysRef = useRef<HTMLDivElement>(null)
  const { successCombination, currentCombination, wrongKey } = useMagicKeys({
    enableGame,
    references: { containerRef, keysRef, textRef }
  })

  return (
    <div
      ref={containerRef}
      className='flex gap-2 font-geist-mono text-sm overflow-hidden'
      onMouseEnter={() => setEnableGame(true)}
      onMouseLeave={() => setEnableGame(false)}
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
        {successCombination ? 'Well done!' : 'Magic keys'}
      </motion.span>
      <div ref={keysRef} className='flex gap-2'>
        {MAGIC_KEYS.map((key, index) => (
          <motion.kbd
            key={key.code}
            className={clsx(
              'px-1.5 bg-monospace-light-gray rounded-sm transition-colors duration-500 ease-in-out',
              currentCombination.includes(key.code) && '!bg-green-500',
              wrongKey === key.code && '!bg-red-500'
            )}
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
            {key.char}
          </motion.kbd>
        ))}
      </div>
    </div>
  )
}
