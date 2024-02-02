'use client'

import Button from '@components/shared/Button'
import { useStore } from '@lib/store/store'
import { useScopedI18n } from '@lib/i18n/client'

export default function ContactButton() {
  const t = useScopedI18n('home.introducing')
  const setShowContactForm = useStore((state) => state.setShowContactForm)

  return (
    <Button
      className='order-2 text-2xl text-monospace-white before:bg-monospace-white after:bg-monospace-white xl:order-1 xl:text-3xl'
      onClick={() => setShowContactForm(true)}
      underlined
    >
      {t('contactButton')}
    </Button>
  )
}
