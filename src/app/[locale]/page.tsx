import { setStaticParamsLocale } from 'next-international/server'
import Header from '@/components/sections/Header'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Introducing from '@/components/sections/Introducing'
import LessButBetter from '@/components/sections/LessButBetter'
import MoreProjects from '@/components/sections/MoreProjects'
import Knowledge from '@/components/sections/Knowledge'
import { getScopedI18n } from '@/lib/i18n/server'

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n('home')

  const moreProjectsHeadline = [
    t('moreProjects.headline.0'),
    t('moreProjects.headline.1'),
    t('moreProjects.headline.2')
  ]

  const lessButBetterHeadline = t('lessButBetter.headline')

  return (
    <main>
      <Header />
      <FeaturedProjects locale={locale} />
      <Introducing />
      <LessButBetter headline={lessButBetterHeadline} />
      <MoreProjects locale={locale} headline={moreProjectsHeadline} />
      <Knowledge />
    </main>
  )
}
