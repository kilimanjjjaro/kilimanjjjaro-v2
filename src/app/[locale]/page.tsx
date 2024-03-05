import { setStaticParamsLocale } from 'next-international/server'
import Header from '@components/sections/Header'
import Projects from '@components/sections/Projects'
import Since2017 from '@components/sections/Since2017'

interface Props {
  params: { locale: string }
}

export default async function Home({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  return (
    <main>
      <Header />
      <div className='sticky top-0'>
        <Projects />
        <Since2017 />
      </div>
    </main>
  )
}
