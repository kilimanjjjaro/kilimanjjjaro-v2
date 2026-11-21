import { describe, expect, it } from 'vitest'
import getOtherProjectsButtonKey from '@/lib/utils/getOtherProjectsButtonKey'
import OTHER_PROJECTS_BUTTON_CASES from '../constants/other-projects-button-cases.json'

describe('getOtherProjectsButtonKey', () => {
  it.each(OTHER_PROJECTS_BUTTON_CASES)(
    'uses $expected with $visibleItems visible projects',
    ({ visibleItems, expected }) => {
      expect(getOtherProjectsButtonKey(visibleItems)).toBe(expected)
    }
  )
})
