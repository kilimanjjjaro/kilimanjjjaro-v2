import type { Transition } from 'motion/react'
import type { CubicBezier } from '@/lib/types/animation'

export const HIDDEN_OPACITY = 0
export const VISIBLE_OPACITY = 1
export const NO_ROTATION = 0
export const NO_OFFSET = 0
export const HIDDEN_SCALE = 0
export const FULL_SCALE = 1
export const NO_DELAY = 0

export const SCROLL_PROGRESS_START = 0
export const SCROLL_PROGRESS_END = 1
export const SCROLL_PROGRESS_RANGE = [
  SCROLL_PROGRESS_START,
  SCROLL_PROGRESS_END
]

const INTRO_EASE_X1 = 0.17
const INTRO_EASE_Y1 = 0.84
const INTRO_EASE_X2 = 0.44
const INTRO_EASE_Y2 = 1
export const INTRO_EASE: CubicBezier = [
  INTRO_EASE_X1,
  INTRO_EASE_Y1,
  INTRO_EASE_X2,
  INTRO_EASE_Y2
]

const MENU_EASE_X1 = 0.77
const MENU_EASE_Y1 = 0
const MENU_EASE_X2 = 0.18
const MENU_EASE_Y2 = 1
export const MENU_EASE: CubicBezier = [
  MENU_EASE_X1,
  MENU_EASE_Y1,
  MENU_EASE_X2,
  MENU_EASE_Y2
]

export const TRANSITION_DURATION = 1
export const FOOTER_REVEAL_DURATION = 1.3
export const REVEAL_DURATION = 1.5
export const MENU_ITEM_DURATION = 1.8
export const MENU_DURATION = 2
export const VIDEO_FADE_DURATION = 2
export const FADE_IN_DURATION = 2.5
export const INTRO_DURATION = 3

export const FADE_IN_DELAY = 2
export const REVEAL_STAGGER = 0.2
export const OTHER_PROJECT_STAGGER = 0.3
export const FEATURED_PROJECT_STAGGER = 1.04
export const HEADLINE_WORDS_DELAY = 0.5
export const STAGGER_CHILDREN = 0.1
export const REVERSE_STAGGER_DIRECTION = -1

export const ITEM_REVEAL_ROTATION = 3
export const TEXT_REVEAL_ROTATION = 4
export const HEADLINE_REVEAL_ROTATION = 6

export const HEADLINE_INTRO_SCALE = 1.3
export const HEADLINE_SCROLL_END = 0.2
export const PORTRAIT_PARALLAX_START = 0.3
export const PORTRAIT_PARALLAX_END = 0.7
export const FEATURED_BACKGROUND_SCROLL_END = 0.4
export const GRID_INITIAL_SCALE = 1.5
export const SINCE_2017_DESKTOP_SCALE_START = 2
export const SINCE_2017_DESKTOP_SCALE_END = 0.9
export const SINCE_2017_MOBILE_SCALE_START = 4
export const SINCE_2017_MOBILE_SCALE_END = 1.2

export const TRANSITION: Transition = {
  duration: TRANSITION_DURATION,
  ease: 'easeInOut'
}

export const REVEAL_TRANSITION: Transition = {
  duration: REVEAL_DURATION,
  ease: 'easeInOut'
}

export const FOOTER_REVEAL_TRANSITION: Transition = {
  duration: FOOTER_REVEAL_DURATION,
  ease: 'easeInOut'
}

export const INTRO_TRANSITION: Transition = {
  duration: INTRO_DURATION,
  ease: INTRO_EASE
}

export const VIDEO_FADE_TRANSITION: Transition = {
  duration: VIDEO_FADE_DURATION,
  ease: 'easeInOut'
}

export const HEADLINE_WORDS_TRANSITION: Transition = {
  ...INTRO_TRANSITION,
  delay: HEADLINE_WORDS_DELAY
}

export const FADE_OUT_STATE = { opacity: HIDDEN_OPACITY }
export const FADE_IN_STATE = { opacity: VISIBLE_OPACITY }

export const TEXT_REVEAL_HIDDEN_STATE = {
  y: '127%',
  rotate: TEXT_REVEAL_ROTATION
}
export const REVEALED_STATE = { y: '0%', rotate: NO_ROTATION }

export const CLIP_HIDDEN_STATE = { clipPath: 'inset(100% 0% 0% 0%)' }
export const CLIP_VISIBLE_STATE = { clipPath: 'inset(0% 0% 0% 0%)' }

export const HEADLINE_WORD_HIDDEN_STATE = {
  y: '117%',
  rotate: HEADLINE_REVEAL_ROTATION
}

export const FADE_IN_TRANSITION: Transition = {
  duration: FADE_IN_DURATION,
  ease: 'easeIn',
  delay: FADE_IN_DELAY
}
