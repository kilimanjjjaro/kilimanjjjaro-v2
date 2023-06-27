export const LOGO_VARIANTS = {
  open: {
    rotate: 360,
    transition: {
      type: 'spring',
      stiffness: 30
    }
  },
  closed: {
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 30
    }
  }
}

export const NAVBAR_VARIANTS = {
  open: {
    top: '0%',
    display: 'flex',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.5
    }
  },
  closed: {
    top: '100%',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const NAVBAR_LI_VARIANTS = {
  open: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
}

export const UL_VARIANTS = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const LANGUAGE_LI_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  closed: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
}

export const STACKS_LI_VARIANTS = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  closed: {
    x: -40,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
}
