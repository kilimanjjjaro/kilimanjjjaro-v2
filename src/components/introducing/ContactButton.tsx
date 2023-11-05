'use client'

import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'

export default function ContactButton() {
  const t = useScopedI18n('home.introducing')
  const { setShowContactForm } = useStore()

  return (
    <Button
      className='order-2 text-2xl xl:text-3xl xl:order-1 text-monospace-white before:bg-monospace-white after:bg-monospace-white'
      onClick={() => setShowContactForm(true)}
      underlined
    >
      {t('contactButton')}
    </Button>
  )
}
