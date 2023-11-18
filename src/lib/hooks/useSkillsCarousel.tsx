import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/lib/store/store'
import { STACKS } from '../constants/general'

export default function useSkillsCarousel() {
  const [isNextArrow, setIsNextArrow] = useState(true)
  const sectionEl = useRef<HTMLInputElement>(null)
  const {
    selectedStack,
    setSelectedStack,
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

    const stack = STACKS.find(
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
      swiperInstance.slideNext(1000)
    }
    if (!isNextArrow) {
      swiperInstance.slidePrev(1000)
    }
  }

  useEffect(() => {
    if (swiperInstance === null) return

    if (shouldMoveToStart) {
      swiperInstance.slideTo(selectedStack.startIndex, 1000)
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
