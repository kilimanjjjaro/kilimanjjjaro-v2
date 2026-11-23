import { stagger, type Variants } from 'motion/react'
import {
  HIDDEN_OPACITY,
  ITEM_REVEAL_ROTATION,
  MENU_DURATION,
  MENU_EASE,
  MENU_ITEM_DURATION,
  NO_ROTATION,
  STAGGER_CHILDREN,
  TEXT_REVEAL_ROTATION,
  VISIBLE_OPACITY
} from '@/lib/constants/animation'

export const NAVBAR_VARIANTS: Variants = {
  open: {
    y: '0%',
    transition: {
      duration: MENU_DURATION,
      ease: MENU_EASE,
      delayChildren: stagger(STAGGER_CHILDREN, { from: 'last' })
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: MENU_DURATION,
      ease: MENU_EASE
    }
  }
}

export const NAVBAR_LI_VARIANTS: Variants = {
  open: {
    y: '0%',
    rotate: NO_ROTATION,
    transition: {
      duration: MENU_ITEM_DURATION,
      ease: MENU_EASE
    }
  },
  closed: {
    y: '130%',
    rotate: TEXT_REVEAL_ROTATION,
    transition: {
      duration: MENU_ITEM_DURATION,
      ease: MENU_EASE
    }
  }
}

export const STACKS_UL_VARIANTS: Variants = {
  open: {
    opacity: VISIBLE_OPACITY,
    display: 'flex'
  },
  closed: {
    opacity: HIDDEN_OPACITY,
    transitionEnd: {
      display: 'none'
    }
  }
}

export const STACKS_LI_VARIANTS: Variants = {
  open: {
    y: '0%',
    rotate: NO_ROTATION
  },
  closed: {
    y: '100%',
    rotate: ITEM_REVEAL_ROTATION
  }
}

export const LANGUAGES_UL_VARIANTS: Variants = {
  open: {
    opacity: VISIBLE_OPACITY,
    display: 'flex'
  },
  closed: {
    opacity: HIDDEN_OPACITY,
    transitionEnd: {
      display: 'none'
    }
  }
}

export const LANGUAGES_LI_VARIANTS: Variants = {
  open: {
    y: '0%'
  },
  closed: {
    y: '-100%'
  }
}

export const OTHER_PROJECTS_VARIANTS: Variants = {
  hidden: {
    opacity: HIDDEN_OPACITY
  },
  show: {
    opacity: VISIBLE_OPACITY
  }
}

export const KNOWLEDGE_ITEM_VARIANTS: Variants = {
  hidden: {
    y: '110%',
    rotate: ITEM_REVEAL_ROTATION
  },
  show: {
    y: '0%',
    rotate: NO_ROTATION
  }
}

export const HR_LINE_VARIANTS: Variants = {
  hidden: {
    scaleX: '0%'
  },
  show: {
    scaleX: '100%'
  }
}
