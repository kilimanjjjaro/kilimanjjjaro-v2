import ScrollButton from '@/components/header/ScrollButton'
import Headline from '@/components/header/Headline'
import { getScopedI18n } from '@/lib/locales/server'

export default async function Header() {
  const t = await getScopedI18n('home.header')

  const headline = [
    t('headline.0'),
    t('headline.1'),
    t('headline.2'),
    t('headline.3'),
    t('headline.4')
  ]

  return (
    <header className='relative flex items-center justify-center min-h-screen overflow-hidden'>
      <Headline headline={headline} />
      <ScrollButton />
    </header>
  )
}
