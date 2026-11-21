import { useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import useCursorPosition from '@/lib/hooks/useCursorPosition'
import useElementDimensions from '@/lib/hooks/useElementDimensions'
import { useScopedI18n } from '@/lib/i18n/client'
import getCenter from '@/lib/utils/getCenter'

interface Props {
  isRepository: boolean
}

export default function OtherProjectVisitButton({ isRepository }: Props) {
  const t = useScopedI18n('home.otherProjects')
  const visitButtonEl = useRef<HTMLDivElement>(null)
  const elementDimensions = useElementDimensions({ ref: visitButtonEl })
  const { x, y } = useCursorPosition({
    trigger: true,
    translateX: getCenter(elementDimensions.width),
    translateY: getCenter(elementDimensions.height)
  })

  return (
    <motion.div
      role='tooltip'
      ref={visitButtonEl}
      className='fixed top-0 left-0 z-10 flex justify-center w-full overflow-hidden pointer-events-none'
      style={{ x, y }}
    >
      <span className='flex items-center gap-3 text-6xl leading-none text-center transition-transform duration-1000 ease-in-out translate-y-[124%] rotate-6 text-kili-white xl:group-hover:translate-y-0 xl:group-hover:rotate-0'>
        {isRepository ? t('repositoryButton') : t('websiteButton')}{' '}
        <ArrowCornerIcon className='w-6' />
      </span>
    </motion.div>
  )
}
