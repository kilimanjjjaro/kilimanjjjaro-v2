import { afterEach, describe, expect, it, vi } from 'vitest'
import getYearsOld from '@/lib/utils/getYearsOld'
import updateStacks from '@/lib/utils/updateStacks'
import { getGitHubImage } from '@/lib/utils/getGitHubImage'
import { SKILLS } from '@/lib/constants/skills'
import { STACKS } from '@/lib/constants/globals'

describe('getYearsOld', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it.each([
    ['2026-12-09T12:00:00', 33],
    ['2026-12-10T12:00:00', 34],
    ['2027-01-01T12:00:00', 34],
    ['2026-06-15T12:00:00', 33]
  ])('on %s returns %i', (date, expected) => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(date))
    expect(getYearsOld()).toBe(expected)
  })
})

describe('updateStacks', () => {
  const stacks = updateStacks()

  it('keeps every stack in order', () => {
    expect(stacks.map((stack) => stack.id)).toEqual(
      STACKS.map((stack) => stack.id)
    )
  })

  it('computes contiguous ranges that cover all skills', () => {
    expect(stacks[0].startIndex).toBe(0)
    for (let i = 1; i < stacks.length; i++) {
      expect(stacks[i].startIndex).toBe(stacks[i - 1].endIndex + 1)
    }
    expect(stacks[stacks.length - 1].endIndex).toBe(SKILLS.length - 1)
  })

  it('every skill inside a range belongs to that stack', () => {
    for (const stack of stacks) {
      for (let i = stack.startIndex; i <= stack.endIndex; i++) {
        expect(SKILLS[i].stackId).toBe(stack.id)
      }
    }
  })
})

describe('getGitHubImage', () => {
  it('builds a cache-busted Open Graph URL for the repository', () => {
    const url = getGitHubImage('wrkload')
    expect(url).toMatch(
      /^https:\/\/opengraph\.githubassets\.com\/[0-9a-f-]{36}\/kilimanjjjaro\/wrkload$/
    )
    expect(getGitHubImage('wrkload')).not.toBe(url)
  })
})
