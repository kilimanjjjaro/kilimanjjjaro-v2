import { describe, expect, it } from 'vitest'
import wrap from '@/lib/utils/wrap'
import { MARQUEE_WRAP_END, MARQUEE_WRAP_START } from '@/lib/constants/marquee'
import WRAP_CASES from '../constants/wrap-cases.json'

describe('wrap', () => {
  it.each(WRAP_CASES.marquee)(
    'wraps $value into the marquee range as $expected',
    ({ value, expected }) => {
      expect(wrap(MARQUEE_WRAP_START, MARQUEE_WRAP_END, value)).toBe(expected)
    }
  )

  it.each(WRAP_CASES.ranges)(
    'wrap($min, $max, $value) = $expected',
    ({ min, max, value, expected }) => {
      expect(wrap(min, max, value)).toBe(expected)
    }
  )
})
