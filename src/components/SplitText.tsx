import { useMemo, useRef } from 'react'

const getRandomChar = () => {
  const charsDictionary = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~'
  ]

  const random = Math.floor(Math.random() * charsDictionary.length)
  return charsDictionary[random]
}

export default function SplitText({ text }: { text: string }) {
  const splittedText = useMemo(() => text.split(''), [text])
  const charEl = useRef<HTMLDivElement>(null)
  const intervals = useRef<NodeJS.Timeout[]>([])

  const randomizeChar = (
    event: React.PointerEvent<HTMLSpanElement>,
    index: number
  ) => {
    if (charEl.current === null) return

    const prevCharEl = charEl.current?.children[index - 1]
    const mainCharEl = event.target as HTMLSpanElement
    const nextCharEl = charEl.current?.children[index + 1]

    const prevChar = prevCharEl?.textContent ?? ''
    const mainChar = mainCharEl?.textContent ?? ''
    const nextChar = nextCharEl?.textContent ?? ''

    if (mainChar === ' ') return

    mainCharEl.textContent = getRandomChar()

    const intervalMain = setInterval(() => {
      mainCharEl.textContent = getRandomChar()
    }, 200)

    intervals.current.push(intervalMain)

    if (prevChar.length !== 0 && prevChar !== ' ') {
      prevCharEl.textContent = getRandomChar()

      const intervalPrev = setInterval(() => {
        prevCharEl.textContent = getRandomChar()
      }, 250)

      intervals.current.push(intervalPrev)
    }

    if (nextChar.length !== 0 && nextChar !== ' ') {
      nextCharEl.textContent = getRandomChar()

      const intervalNext = setInterval(() => {
        nextCharEl.textContent = getRandomChar()
      }, 300)

      intervals.current.push(intervalNext)
    }
  }

  const normalizeChar = (index: number) => {
    if (charEl.current === null) return

    const prevCharEl = charEl.current?.children[index - 1]
    const mainCharEl = charEl.current?.children[index]
    const nextCharEl = charEl.current?.children[index + 1]

    const prevChar = prevCharEl?.textContent ?? ''
    const mainChar = mainCharEl?.textContent ?? ''
    const nextChar = nextCharEl?.textContent ?? ''

    if (mainChar === ' ') return

    mainCharEl.textContent = splittedText[index]

    if (prevChar.length !== 0 && prevChar !== ' ') {
      prevCharEl.textContent = splittedText[index - 1]
    }

    if (nextChar.length !== 0 && nextChar !== ' ') {
      nextCharEl.textContent = splittedText[index + 1]
    }

    intervals.current.forEach((interval) => clearInterval(interval))
  }

  return (
    <span ref={charEl}>
      {splittedText.map((letter, index) => {
        return (
          <span
            key={index}
            onPointerEnter={(event) => randomizeChar(event, index)}
            onPointerLeave={() => normalizeChar(index)}
          >
            {letter}
          </span>
        )
      })}
    </span>
  )
}
