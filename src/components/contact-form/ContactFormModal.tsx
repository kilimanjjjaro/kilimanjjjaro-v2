'use client'

import { useRef } from 'react'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import ContactForm from '@/components/contact-form/ContactForm'
import { useStore } from '@/store/store'

export default function ContactFormModal() {
  const { showContactForm } = useStore()
  const dragConstraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  return (
    <AnimatePresence>
      {showContactForm && (
        <motion.div
          ref={dragConstraintsRef}
          className='fixed inset-0 z-40 flex items-center justify-center pointer-events-none'
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
