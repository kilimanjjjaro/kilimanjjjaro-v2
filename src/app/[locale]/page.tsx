import { setStaticParamsLocale } from 'next-international/server'
import Header from '@/components/sections/Header'
import Projects from '@/components/sections/Projects'
import Introducing from '@/components/sections/Introducing'
import Since2017 from '@/components/sections/Since2017'
import Knowledge from '@/components/sections/Knowledge'

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setStaticParamsLocale(locale)
  return (
    <main>
      <Header />
      <Projects />
      <Introducing />
      <Since2017 />
      <Knowledge />
    </main>
  )
}
