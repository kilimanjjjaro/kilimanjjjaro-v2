export const NAVBAR_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.18, 1],
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.18, 1]
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: '0%',
    rotate: 0,
    transition: {
      duration: 1.8,
      ease: [0.77, 0, 0.18, 1]
    }
  },
  closed: {
    y: '130%',
    rotate: 4,
    transition: {
      duration: 1.8,
      ease: [0.77, 0, 0.18, 1]
    }
  }
}

export const STACKS_UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex'
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: 'none'
    }
  }
}

export const STACKS_LI_VARIANTS = {
  open: {
    y: '0%',
    rotate: 0
  },
  closed: {
    y: '100%',
    rotate: 3
  }
}

export const LANGUAGES_UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex'
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: 'none'
    }
  }
}

export const LANGUAGES_LI_VARIANTS = {
  open: {
    y: '0%'
  },
  closed: {
    y: '-100%'
  }
}

export const OTHER_PROJECTS_VARIANTS = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

export const KNOWLEDGE_ITEM_VARIANTS = {
  hidden: {
    y: '110%',
    rotate: 3
  },
  show: {
    y: '0%',
    rotate: 0
  }
}

export const HR_LINE_VARIANTS = {
  hidden: {
    scaleX: '0%'
  },
  show: {
    scaleX: '100%'
  }
}
