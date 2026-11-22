import { act } from '@testing-library/react'
import { vi } from 'vitest'
import { CHARACTER_WIDTH_PX } from '../constants/components'

export function advanceTimers(milliseconds: number) {
  act(() => {
    vi.advanceTimersByTime(milliseconds)
  })
}

export function measureTextByLength(element: HTMLElement) {
  return element.textContent.length * CHARACTER_WIDTH_PX
}

export function toPixels(text: string) {
  return `${text.length * CHARACTER_WIDTH_PX}px`
}
