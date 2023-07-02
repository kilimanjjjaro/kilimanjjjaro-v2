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
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1],
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  },
  closed: {
    y: '-100%',
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1],
      delay: 0.7,
      staggerChildren: 0.1,
      staggerDirection: -1
    },
    transitionEnd: {
      display: 'none',
      y: '100%'
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    y: '115%',
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1]
    }
  }
}

export const NAVBAR_BUTTON_ONE_VARIANTS = {
  open: {
    rotate: 135,
    translateY: 3,
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1],
      delay: 0.7
    }
  }
}

export const NAVBAR_BUTTON_TWO_VARIANTS = {
  open: {
    rotate: -135,
    translateY: -7,
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.85, 0.01, 0.4, 1],
      delay: 0.7
    }
  }
}

export const UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: {
      duration: 0.5,
      ease: [0.85, 0.01, 0.4, 1],
      staggerChildren: 0.1
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.85, 0.01, 0.4, 1],
      staggerChildren: 0.1,
      staggerDirection: -1
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const LI_VARIANTS = {
  open: {
    y: '0%',
    transition: {
      duration: 0.5,
      ease: [0.85, 0.01, 0.4, 1]
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.5,
      ease: [0.85, 0.01, 0.4, 1]
    }
  }
}
