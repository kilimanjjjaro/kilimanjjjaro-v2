import { STACKS } from '@/constants/general'
import { SKILLS } from '@/constants/skills'

export default function updateStacks() {
  return STACKS.map((stack) => {
    const filteredSkills = SKILLS.filter((skill) => skill.stackId === stack.id)
    const startIndex = SKILLS.indexOf(filteredSkills[0])
    const endIndex = startIndex + filteredSkills.length - 1
    return { ...stack, startIndex, endIndex }
  })
}
