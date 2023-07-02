import { useEffect } from 'react'
import { useAnimate, useInView, stagger } from 'framer-motion'
import SplitType from 'split-type'

export default function useSplitText() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (scope.current === null) return

    const parentSplit = SplitType.create(scope.current, {
      types: 'lines',
      tagName: 'span',
      lineClass: 'overflow-hidden'
    })

    if (parentSplit.lines === null) return

    const childSplit = SplitType.create(parentSplit.lines, {
      types: 'lines',
      tagName: 'span',
      lineClass: 'fadeInSplittedText'
    })

    if (isInView) {
      void animate(
        'span.fadeInSplittedText',
        { transform: 'translateY(0%)' },
        { duration: 0.7, ease: 'easeOut', delay: stagger(0.3) }
      )
    }

    return () => {
      parentSplit.revert()
      childSplit.revert()
    }
  }, [isInView, scope, animate])

  return { elRef: scope }
}
