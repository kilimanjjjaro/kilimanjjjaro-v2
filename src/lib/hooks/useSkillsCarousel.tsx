import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/lib/store/store'
import { CAROUSEL_SLIDE_SPEED } from '@/lib/constants/carousel'
import getCenter from '@/lib/utils/getCenter'

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

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sectionEl.current === null) return

    const isRightSide = getCenter(window.innerWidth) <= event.pageX

    if (isRightSide) {
      setIsNextArrow(true)
    } else {
      setIsNextArrow(false)
    }
  }

  const handleChange = () => {
    if (swiperInstance === null) return

    const { activeIndex: currentSlideIndex } = swiperInstance

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
      swiperInstance.slideNext(CAROUSEL_SLIDE_SPEED)
    }
    if (!isNextArrow) {
      swiperInstance.slidePrev(CAROUSEL_SLIDE_SPEED)
    }
  }

  useEffect(() => {
    if (swiperInstance === null) return

    if (shouldMoveToStart) {
      swiperInstance.slideTo(selectedStack.startIndex, CAROUSEL_SLIDE_SPEED)
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
