import Header from '@/components/sections/Header'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Introducing from '@/components/sections/Introducing'
import OtherProjects from '@/components/sections/OtherProjects'
import KnowMe from '@/components/sections/KnowMe'
import { setStaticParamsLocale } from 'next-international/server'
import LessButBetter from '@/components/sections/LessButBetter'

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

  return (
    <main>
      <Header />
      <FeaturedProjects />
      <Introducing />
      <LessButBetter />
      <OtherProjects />
      <KnowMe />
    </main>
  )
}
