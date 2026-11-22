import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'motion/react'
import type { Transition } from 'motion/react'
import isEven from '@/lib/utils/isEven'
import {
  ITEM_REVEAL_ROTATION,
  NO_ROTATION,
  REVEALED_STATE
} from '@/lib/constants/animation'
import {
  OTHER_PROJECT_IMAGE_HEIGHT,
  OTHER_PROJECT_REPOSITORY_IMAGE_HEIGHT
} from '@/lib/constants/projects-ui'
import type { OtherProjectInterface } from '@/lib/types/projects'

interface Props {
  project: OtherProjectInterface
  index: number
  isInView: boolean
  isDesktop: boolean
  transition: Transition
}

export default function OtherProjectImage({
  project,
  index,
  isInView,
  isDesktop,
  transition
}: Props) {
  return (
    <div
      className={clsx(
        'xl:absolute overflow-hidden mt-8 xl:mt-0 order-1 xl:order-2 right-10 z-10',
        isEven(index) ? 'xl:-rotate-3' : 'xl:rotate-3'
      )}
    >
      <motion.div
        initial={{
          y: isDesktop ? '0%' : '107%',
          rotate: isDesktop ? NO_ROTATION : ITEM_REVEAL_ROTATION
        }}
        animate={isInView && REVEALED_STATE}
        transition={transition}
      >
        <Image
          className={clsx(
            'block transition-transform duration-1000 ease-in-out xl:translate-y-[105%] xl:group-hover:translate-y-0',
            project.isRepository ? 'aspect-420/210' : 'aspect-420/264'
          )}
          src={project.image}
          alt={`Image of ${project.name}`}
          width={420}
          height={
            project.isRepository
              ? OTHER_PROJECT_REPOSITORY_IMAGE_HEIGHT
              : OTHER_PROJECT_IMAGE_HEIGHT
          }
          priority
        />
      </motion.div>
    </div>
  )
}
