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

export const LI_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 400, velocity: -100 }
    }
  },
  closed: {
    y: 16,
    opacity: 0,
    transition: {
      y: { stiffness: 400 }
    }
  }
}
