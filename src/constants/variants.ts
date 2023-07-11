export const LOGO_VARIANTS = {
  open: {
    rotate: 360,
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.7,
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
      duration: 0.7,
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
    display: 'flex',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      duration: 3,
      ease: [0.77, 0, 0.18, 1],
      staggerChildren: 0.1,
      delayChildren: 0.6
    }
  },
  closed: {
    y: '100%',
    clipPath: 'polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%)',
    transition: {
      duration: 3,
      ease: [0.77, 0, 0.18, 1],
      staggerChildren: 0.1,
      staggerDirection: -1
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: '0%',
    rotate: 0,
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.18, 1]
    }
  },
  closed: {
    y: '120%',
    rotate: 4,
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.18, 1],
      delay: 0.3
    }
  }
}

export const NAVBAR_BUTTON_ONE_VARIANTS = {
  open: {
    rotate: 135,
    translateY: 3,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

export const NAVBAR_BUTTON_TWO_VARIANTS = {
  open: {
    rotate: -135,
    translateY: -7,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

export const STACKS_UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      staggerChildren: 0.1
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      staggerChildren: 0.1,
      staggerDirection: 1
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const STACKS_LI_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

export const LANGUAGES_UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const LANGUAGES_LI_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  closed: {
    y: '-100%',
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

export const ANOTHER_PROJECTS_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  }
}

export const ANOTHER_PROJECT_VARIANTS = {
  hidden: {
    opacity: 0,
    y: '50%',
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export const ANOTHER_PROJECT_HR_VARIANTS = {
  hidden: { scaleX: '0%' },
  show: {
    scaleX: '100%',
    transition: {
      duration: 2,
      ease: [0.17, 0.84, 0.44, 1],
      delay: 0.7
    }
  }
}

export const ANOTHER_PROJECTS_BUTTON_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 1.3
    }
  }
}
