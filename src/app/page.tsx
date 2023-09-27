import Header from '@/components/sections/Header'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Introducing from '@/components/sections/Introducing'
import OtherProjects from '@/components/sections/OtherProjects'
import KnowMe from '@/components/sections/KnowMe'

export default function Home() {
  return (
    <main>
      <Header />
      <FeaturedProjects />
      <Introducing />
      <OtherProjects />
      <KnowMe />
    </main>
  )
}
