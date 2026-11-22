import { afterEach, describe, expect, it, vi } from 'vitest'
import getYearsOld from '@/lib/utils/getYearsOld'
import updateStacks from '@/lib/utils/updateStacks'
import { getGitHubImage } from '@/lib/utils/getGitHubImage'
import { SKILLS } from '@/lib/constants/skills'
import { STACKS } from '@/lib/constants/globals'
import { FIRST_INDEX, LAST_INDEX_OFFSET } from '@/lib/constants/math'
import { NEXT_INDEX_OFFSET } from '../constants/unit'
import { findStackIdAt } from '../utils/stacks'
import YEARS_OLD_CASES from '../constants/years-old-cases.json'

describe('getYearsOld', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it.each(YEARS_OLD_CASES)(
    'on $date returns $expected',
    ({ date, expected }) => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(date))
      expect(getYearsOld()).toBe(expected)
    }
  )
})

describe('updateStacks', () => {
  const stacks = updateStacks()

  it('keeps every stack in order', () => {
    expect(stacks.map((stack) => stack.id)).toEqual(
      STACKS.map((stack) => stack.id)
    )
  })

  it('computes contiguous ranges that cover all skills', () => {
    const [firstStack] = stacks
    const lastStack = stacks.at(-LAST_INDEX_OFFSET)

    expect(firstStack.startIndex).toBe(FIRST_INDEX)
    stacks.slice(NEXT_INDEX_OFFSET).forEach((stack, index) => {
      expect(stack.startIndex).toBe(stacks[index].endIndex + NEXT_INDEX_OFFSET)
    })
    expect(lastStack?.endIndex).toBe(SKILLS.length - LAST_INDEX_OFFSET)
  })

  it('every skill inside a range belongs to that stack', () => {
    SKILLS.forEach((skill, index) => {
      expect(findStackIdAt(stacks, index)).toBe(skill.stackId)
    })
  })
})

describe('getGitHubImage', () => {
  it('builds a cache-busted Open Graph URL for the repository', () => {
    const url = getGitHubImage('wrkload')
    expect(url).toMatch(
      /^https:\/\/opengraph\.githubassets\.com\/[0-9a-f\-]{36}\/kilimanjjjaro\/wrkload$/v
    )
    expect(getGitHubImage('wrkload')).not.toBe(url)
  })
})
