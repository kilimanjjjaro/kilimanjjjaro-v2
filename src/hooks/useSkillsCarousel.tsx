import { useEffect, useRef, useState } from 'react'
import Flicking, { ChangedEvent } from '@egjs/react-flicking'
import { SKILLS } from '@/constants/skills'
import { useStore } from '@/store/store'

export default function useSkillsCarousel() {
  const totalSlides = SKILLS.length
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isNextArrow, setIsNextArrow] = useState(true)
  const sectionElRef = useRef<HTMLInputElement>(null)
  const flickeringElRef = useRef<Flicking>(null)
  const {
    selectedStack,
    setSelectedStack,
    stacks,
    shouldMoveToStart,
    setShouldMoveToStart
  } = useStore()

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (sectionElRef.current === null) return

    setCursorPosition({
      x: event.pageX - sectionElRef.current.offsetLeft - 60,
      y: event.pageY - sectionElRef.current.offsetTop - 24
    })

    const isRightSide = innerWidth / 2 <= event.pageX

    if (isRightSide) {
      setIsNextArrow(true)
    }

    if (!isRightSide) {
      setIsNextArrow(false)
    }
  }

  const handleChange = (event: ChangedEvent<Flicking>) => {
    const currentSlideIndex = event.index
    const startIndexSelectedStack = selectedStack.startIndex
    const endIndexSelectedStack = selectedStack.endIndex

    if (
      currentSlideIndex >= startIndexSelectedStack &&
      currentSlideIndex <= endIndexSelectedStack
    ) {
      return
    }

    const stack = stacks.find(
      (stack) =>
        stack.startIndex <= currentSlideIndex &&
        stack.endIndex >= currentSlideIndex
    )

    if (stack === undefined) return

    setSelectedStack(stack)
    setShouldMoveToStart(false)
  }

  const handleClick = async () => {
    if (flickeringElRef.current === null) return

    const currentSlide = flickeringElRef.current.currentPanel.index
    const visibleSlides = flickeringElRef.current.visiblePanels.length
    const isFirstSlide = currentSlide === 0
    const isLastSlide = totalSlides - visibleSlides === currentSlide

    try {
      if (isNextArrow && !isLastSlide) {
        await flickeringElRef.current?.next()
      }

      if (!isNextArrow && !isFirstSlide) {
        await flickeringElRef.current?.prev()
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (flickeringElRef.current === null) return

    if (shouldMoveToStart) {
      flickeringElRef.current.moveTo(selectedStack.startIndex).catch(() => {})
    }
  }, [selectedStack, shouldMoveToStart])

  return {
    isHovered,
    setIsHovered,
    cursorPosition,
    isNextArrow,
    sectionElRef,
    flickeringElRef,
    handleMouseMove,
    handleChange,
    handleClick
  }
}
