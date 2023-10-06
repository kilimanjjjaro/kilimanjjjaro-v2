import { setStaticParamsLocale } from 'next-international/server'
import Header from '@/components/sections/Header'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Introducing from '@/components/sections/Introducing'
import LessButBetter from '@/components/sections/LessButBetter'
import MoreProjects from '@/components/sections/MoreProjects'
import Knowledge from '@/components/sections/Knowledge'

export default async function Home({
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
      <MoreProjects />
      <Knowledge />
    </main>
  )
}
