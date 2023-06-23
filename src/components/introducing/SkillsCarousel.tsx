'use client'

import { useEffect, useRef, useState } from 'react'
import Flicking, { ChangedEvent } from '@egjs/react-flicking'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { SKILLS } from '@/constants/skills'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'
import { ArrowLongLeftIcon } from '@/icons/ArrowLongLeftIcon'
import { useStore } from '@/store/store'

export default function SkillsCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isNextArrow, setIsNextArrow] = useState(true)
  const {
    selectedStack,
    setSelectedStack,
    stacks,
    shouldMoveToStart,
    setShouldMoveToStart
  } = useStore()
  const totalSlides = SKILLS.length
  const sectionElRef = useRef<HTMLInputElement>(null)
  const flickeringElRef = useRef<Flicking>(null)

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

  useEffect(() => {
    if (flickeringElRef.current === null) return

    if (shouldMoveToStart) {
      flickeringElRef.current.moveTo(selectedStack.startIndex).catch(() => {})
    }
  }, [selectedStack, shouldMoveToStart])

  return (
    <div
      className={clsx('relative px-60', isHovered && 'cursor-none')}
      onPointerMove={(event) => handleMouseMove(event)}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={async () => await handleClick()}
      ref={sectionElRef}
    >
      <motion.div
        className='absolute z-10 pointer-events-none'
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut'
        }}
      >
        {isNextArrow && (
          <ArrowLongRightIcon className='w-32 fill-kilimanjjjaro-white' />
        )}
        {!isNextArrow && (
          <ArrowLongLeftIcon className='w-32 fill-kilimanjjjaro-white' />
        )}
      </motion.div>
      <Flicking
        ref={flickeringElRef}
        onChanged={handleChange}
        align='prev'
        cameraClass='flex'
        duration={250}
        bound
      >
        {SKILLS.map((icon) => (
          <article
            className='flex flex-col items-center mr-36 group'
            key={icon.id}
          >
            <i dangerouslySetInnerHTML={{ __html: icon.svg }} />
            <div className='invisible px-3 py-1 mt-8 ease-in-out rounded-full opacity-0 bg-kilimanjjjaro-light-gray duration-400 group-hover:opacity-100 group-hover:visible'>
              {icon.name}
            </div>
          </article>
        ))}
      </Flicking>
    </div>
  )
}
