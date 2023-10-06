import Headline from '@/components/knowledge/Headline'
import Content from '@/components/knowledge/Content'
import { getCurrentLocale, getScopedI18n } from '@/lib/i18n/server'

export default async function Knowledge() {
  const t = await getScopedI18n('home.knowledge')
  const locale = getCurrentLocale()

  const sectionTitle = t('sectionTitle')

  return (
    <section id='knowledge' className='pt-32 pb-40 bg-kili-dark-gray'>
      <Headline headline={sectionTitle} />
      <Content locale={locale} />
    </section>
  )
}
