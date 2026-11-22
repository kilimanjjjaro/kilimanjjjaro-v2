import { TOTAL_OTHER_PROJECTS } from '@/lib/constants/projects'
import {
  INITIAL_VISIBLE_OTHER_PROJECTS,
  LAST_REMAINING_OTHER_PROJECT
} from '@/lib/constants/projects-ui'

export default function getOtherProjectsButtonKey(visibleItems: number) {
  if (visibleItems >= TOTAL_OTHER_PROJECTS) return 'otherProjectsButtons.3'
  if (TOTAL_OTHER_PROJECTS - visibleItems === LAST_REMAINING_OTHER_PROJECT) {
    return 'otherProjectsButtons.2'
  }
  if (visibleItems > INITIAL_VISIBLE_OTHER_PROJECTS) {
    return 'otherProjectsButtons.1'
  }

  return 'otherProjectsButtons.0'
}
