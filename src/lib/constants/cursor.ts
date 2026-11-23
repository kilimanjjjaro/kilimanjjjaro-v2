import type { Variants } from 'motion/react'
import { FULL_SCALE, HIDDEN_SCALE } from '@/lib/constants/animation'

export enum CursorStatus {
  Default = 'default',
  Hidden = 'hidden',
  Hover = 'hover'
}

export const CURSOR_OFFSCREEN_POSITION = -100

const CURSOR_SPRING_DAMPING = 100
const CURSOR_SPRING_STIFFNESS = 500
export const CURSOR_SPRING = {
  damping: CURSOR_SPRING_DAMPING,
  stiffness: CURSOR_SPRING_STIFFNESS
}

const CURSOR_HOVER_SCALE = 0.4

export const CURSOR_VARIANTS: Variants = {
  [CursorStatus.Hidden]: {
    scale: HIDDEN_SCALE,
    borderColor: 'rgba(248, 248, 248, 0)',
    backgroundColor: 'rgba(248, 248, 248, 0)'
  },
  [CursorStatus.Default]: {
    scale: FULL_SCALE,
    borderColor: 'rgba(248, 248, 248, 1)',
    backgroundColor: 'rgba(248, 248, 248, 0)'
  },
  [CursorStatus.Hover]: {
    scale: CURSOR_HOVER_SCALE,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    borderColor: 'rgba(248, 248, 248, 0)'
  }
}
