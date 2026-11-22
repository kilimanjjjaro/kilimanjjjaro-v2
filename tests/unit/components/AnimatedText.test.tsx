import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import AnimatedText from '@/components/shared/AnimatedText'
import scrambleText from '@/lib/utils/scrambleText'
import { SCRAMBLE_INTERVAL_MS, SCRAMBLE_ITERATIONS } from '@/lib/constants/text'
import {
  ANIMATED_TEXT,
  FIRST_RANDOM_VALUE,
  UPDATED_ANIMATED_TEXT
} from '../../constants/components'
import {
  advanceTimers,
  measureTextByLength,
  toPixels
} from '../../utils/components'

describe('AnimatedText', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(FIRST_RANDOM_VALUE)
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('scrambles the text on hover and restores it after the last iteration', () => {
    render(<AnimatedText text={ANIMATED_TEXT} />)
    const element = screen.getByText(ANIMATED_TEXT)

    fireEvent.mouseEnter(element)
    advanceTimers(SCRAMBLE_INTERVAL_MS)

    expect(element.textContent).toBe(scrambleText(ANIMATED_TEXT))

    advanceTimers(SCRAMBLE_INTERVAL_MS * SCRAMBLE_ITERATIONS)

    expect(element.textContent).toBe(ANIMATED_TEXT)
  })

  it('restores the text when the pointer leaves', () => {
    render(<AnimatedText text={ANIMATED_TEXT} />)
    const element = screen.getByText(ANIMATED_TEXT)

    fireEvent.mouseEnter(element)
    advanceTimers(SCRAMBLE_INTERVAL_MS)
    fireEvent.mouseLeave(element)

    expect(element.textContent).toBe(ANIMATED_TEXT)
  })

  it('shows the new text when the text changes', () => {
    const { container, rerender } = render(
      <AnimatedText text={ANIMATED_TEXT} />
    )

    rerender(<AnimatedText text={UPDATED_ANIMATED_TEXT} />)

    expect(container.textContent).toBe(UPDATED_ANIMATED_TEXT)
  })

  it('restores the new text when the text changes while scrambling', () => {
    const { container, rerender } = render(
      <AnimatedText text={ANIMATED_TEXT} />
    )
    const element = screen.getByText(ANIMATED_TEXT)

    fireEvent.mouseEnter(element)
    advanceTimers(SCRAMBLE_INTERVAL_MS)
    rerender(<AnimatedText text={UPDATED_ANIMATED_TEXT} />)
    fireEvent.mouseLeave(element)

    expect(container.textContent).toBe(UPDATED_ANIMATED_TEXT)
  })

  it('keeps the width of the current text', () => {
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(
      function (this: HTMLElement) {
        return measureTextByLength(this)
      }
    )
    const { rerender } = render(<AnimatedText text={ANIMATED_TEXT} />)
    const element = screen.getByText(ANIMATED_TEXT)

    expect(element.style.width).toBe(toPixels(ANIMATED_TEXT))

    rerender(<AnimatedText text={UPDATED_ANIMATED_TEXT} />)

    expect(element.style.width).toBe(toPixels(UPDATED_ANIMATED_TEXT))
  })
})
