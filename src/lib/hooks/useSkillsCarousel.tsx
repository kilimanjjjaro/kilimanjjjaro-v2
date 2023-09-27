import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/lib/store/store'

export default function useSkillsCarousel() {
  const [isNextArrow, setIsNextArrow] = useState(true)
  const sectionEl = useRef<HTMLInputElement>(null)
  const {
    selectedStack,
    setSelectedStack,
    stacks,
    shouldMoveToStart,
    setShouldMoveToStart,
    swiperInstance
  } = useStore()

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (sectionEl.current === null) return

    const isRightSide = window.innerWidth / 2 <= event.pageX

    if (isRightSide) {
      setIsNextArrow(true)
    } else {
      setIsNextArrow(false)
    }
  }

  const handleChange = () => {
    if (swiperInstance === null) return

    const currentSlideIndex = swiperInstance.activeIndex

    const stack = stacks.find(
      (stack) =>
        stack.startIndex <= currentSlideIndex &&
        stack.endIndex >= currentSlideIndex
    )

    if (stack === undefined) return

    if (stack.id !== selectedStack.id) {
      setSelectedStack(stack)
      setShouldMoveToStart(false)
    }
  }

  const handleClick = () => {
    if (swiperInstance === null) return

    if (isNextArrow) {
      swiperInstance.slideNext()
    }
    if (!isNextArrow) {
      swiperInstance.slidePrev()
    }
  }

  useEffect(() => {
    if (swiperInstance === null) return

    if (shouldMoveToStart) {
      swiperInstance.slideTo(selectedStack.startIndex)
    }
  }, [selectedStack, shouldMoveToStart, swiperInstance])

  return {
    isNextArrow,
    sectionEl,
    handleMouseMove,
    handleChange,
    handleClick
  }
}
