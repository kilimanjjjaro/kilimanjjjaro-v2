import { describe, expect, it } from 'vitest'
import wrap from '@/lib/utils/wrap'

const MARQUEE_CASES: Array<[number, number]> = [
  [-100, -20],
  [-40.5, -20.5],
  [-40, -20],
  [-30, -30],
  [-20, -20],
  [-19.99, -39.989999999999995],
  [0, -20],
  [7.25, -32.75],
  [20, -20],
  [55, -25],
  [1234.5, -25.5]
]

describe('wrap', () => {
  it.each(MARQUEE_CASES)(
    'wraps %d into the marquee range (-20, -40) as %d',
    (value, expected) => {
      expect(wrap(-20, -40, value)).toBe(expected)
    }
  )

  it.each([
    [0, 10, 25, 5],
    [0, 10, -3, 7],
    [5, 5.5, 7, 5]
  ])('wrap(%d, %d, %d) = %d', (min, max, value, expected) => {
    expect(wrap(min, max, value)).toBe(expected)
  })
})
