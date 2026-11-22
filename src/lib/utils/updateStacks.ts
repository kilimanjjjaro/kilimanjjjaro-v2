import { STACKS } from '@/lib/constants/globals'
import { SKILLS } from '@/lib/constants/skills'
import { LAST_INDEX_OFFSET } from '@/lib/constants/math'
import type { StackInterface } from '@/lib/types/globals'

export default function updateStacks(): StackInterface[] {
  return STACKS.map((stack) => {
    const filteredSkills = SKILLS.filter((skill) => skill.stackId === stack.id)
    const [firstSkill] = filteredSkills
    const startIndex = SKILLS.indexOf(firstSkill)
    const endIndex = startIndex + filteredSkills.length - LAST_INDEX_OFFSET
    return { ...stack, startIndex, endIndex }
  })
}
