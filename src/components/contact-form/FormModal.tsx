'use client'

import { useRef } from 'react'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import ContactForm from '@/components/contact-form/Form'
import { useStore } from '@/lib/store/store'

export default function FormModal() {
  const showContactForm = useStore((state) => state.showContactForm)
  const dragConstraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <AnimatePresence>
      {showContactForm && (
        <motion.div
          role='dialog'
          ref={dragConstraintsRef}
          className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'
        >
          <motion.div
            drag
            dragConstraints={dragConstraintsRef}
            dragControls={dragControls}
            dragListener={false}
          >
            <ContactForm handleDrag={(event) => dragControls.start(event)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
