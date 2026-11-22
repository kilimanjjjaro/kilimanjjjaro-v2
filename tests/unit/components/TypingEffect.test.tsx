import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import TypingEffect from '@/components/shared/TypingEffect'
import {
  TYPING_INTERVAL_MS,
  TYPING_START_POSITION,
  TYPING_STEP
} from '@/lib/constants/text'
import { TYPED_TEXT, UPDATED_TYPED_TEXT } from '../../constants/components'
import { advanceTimers } from '../../utils/components'

describe('TypingEffect', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('types one character per interval until the text is complete', () => {
    const { container } = render(<TypingEffect text={TYPED_TEXT} />)

    expect(container.textContent).toBe('')

    advanceTimers(TYPING_INTERVAL_MS)

    expect(container.textContent).toBe(
      TYPED_TEXT.slice(TYPING_START_POSITION, TYPING_STEP)
    )

    advanceTimers(TYPING_INTERVAL_MS * TYPED_TEXT.length)

    expect(container.textContent).toBe(TYPED_TEXT)
  })

  it('starts typing again when the text changes', () => {
    const { container, rerender } = render(<TypingEffect text={TYPED_TEXT} />)

    advanceTimers(TYPING_INTERVAL_MS * TYPED_TEXT.length)
    rerender(<TypingEffect text={UPDATED_TYPED_TEXT} />)

    expect(container.textContent).toBe('')

    advanceTimers(TYPING_INTERVAL_MS * UPDATED_TYPED_TEXT.length)

    expect(container.textContent).toBe(UPDATED_TYPED_TEXT)
  })
})
