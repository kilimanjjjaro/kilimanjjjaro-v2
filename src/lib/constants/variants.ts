export const CURSOR_VARIANTS = {
  hidden: {
    scale: 0,
    borderColor: 'rgba(248, 248, 248, 0)',
    backgroundColor: 'rgba(248, 248, 248, 0)'
  },
  visible: {
    scale: 1,
    borderColor: 'rgba(248, 248, 248, 1)',
    backgroundColor: 'rgba(248, 248, 248, 0)'
  },
  hover: {
    scale: 0.4,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    borderColor: 'rgba(248, 248, 248, 0)'
  }
}

export const NAVBAR_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 2,
      ease: [0.65, 0.05, 0.36, 1],
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 2,
      ease: [0.65, 0.05, 0.36, 1]
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: '0%',
    rotate: 0,
    transition: {
      duration: 1.8,
      ease: [0.65, 0.05, 0.36, 1]
    }
  },
  closed: {
    y: '130%',
    rotate: 4,
    transition: {
      duration: 1.8,
      ease: [0.65, 0.05, 0.36, 1]
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
    display: 'flex',
    transition: {
      delay: 0
    }
  },
  closed: {
    display: 'none',
    transition: {
      delay: 0.7
    }
  }
}

export const LANGUAGES_LI_VARIANTS = {
  open: {
    y: '0%',
    transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
  },
  closed: {
    y: '100%',
    transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
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

export const BUTTON_TEXT_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.18, 1]
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.18, 1],
      delay: 0.1
    }
  }
}

export const BUTTON_UNDERLINE_VARIANTS = {
  open: {
    originX: 'right',
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.18, 1],
      delay: 0.1
    }
  },
  closed: {
    originX: 'left',
    scaleX: 0,
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.18, 1]
    }
  }
}
