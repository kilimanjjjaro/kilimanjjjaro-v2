import { setStaticParamsLocale } from 'next-international/server'
import Header from '@components/sections/Header'
import Projects from '@components/sections/Projects'

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

  return (
    <main>
      <Header />
      <Projects />
      {/* <Introducing />
      <Since2017 />
      <Knowledge /> */}
    </main>
  )
}
