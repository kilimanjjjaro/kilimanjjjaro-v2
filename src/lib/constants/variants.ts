export const LOGO_VARIANTS = {
  open: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.85, 0.01, 0.4, 1]
    }
  }
}

export const NAVBAR_BUTTON_VARIANTS = {
  animate: {
    y: ['0%', '-105%', '-105%', '105%', '105%', '0%'],
    opacity: [1, 1, 0, 0, 1, 1],
    transition: {
      duration: 1,
      ease: [0.85, 0.01, 0.4, 1],
      times: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }
  },
  initial: {
    y: 0,
    opacity: 1
  }
}

export const NAVBAR_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 1.7,
      ease: [0.77, 0, 0.18, 1],
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 1.7,
      ease: [0.77, 0, 0.18, 1],
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: '0%',
    rotate: 0,
    transition: {
      duration: 1.3,
      ease: [0.77, 0, 0.18, 1]
    }
  },
  closed: {
    y: '130%',
    rotate: 4,
    transition: {
      duration: 1.3,
      ease: [0.77, 0, 0.18, 1]
    }
  }
}

export const NAVBAR_BUTTON_ONE_VARIANTS = {
  open: {
    rotate: 135,
    translateY: 3
  },
  closed: {
    rotate: 0,
    translateY: 0
  }
}

export const NAVBAR_BUTTON_TWO_VARIANTS = {
  open: {
    rotate: -135,
    translateY: -7
  },
  closed: {
    rotate: 0,
    translateY: 0
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

export const MORE_PROJECTS_VARIANTS = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

export const OTHER_PROJECT_VARIANTS = {
  hidden: {
    y: '100%',
    rotate: 3
  },
  show: {
    y: '0%',
    rotate: 0
  }
}

export const OTHER_PROJECT_HR_VARIANTS = {
  hidden: {
    scaleX: '0%'
  },
  show: {
    scaleX: '100%'
  }
}
