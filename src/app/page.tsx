import Header from '@/components/sections/Header'
import Introducing from '@/components/sections/Introducing'
import Projects from '@/components/sections/Projects'
import KnowMe from '@/components/sections/KnowMe'

export default function Home() {
  return (
    <main className='transition-transform duration-[2s] ease-kili-in'>
      <Header />
      <Introducing />
      <Projects />
      <KnowMe />
    </main>
  )
}
