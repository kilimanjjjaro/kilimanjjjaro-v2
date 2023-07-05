import Introducing from '@/sections/Introducing'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <main>
      <header className='flex items-center justify-center min-h-screen'>
        <h1 className='text-kili-white text-8xl 2xl:text-[150px] flex flex-col items-center leading-[1.05] gap-y-3'>
          <span className='overflow-hidden'>
            <span className='block translate-y-full animate-fade-in-headline'>
              Developing & Designing
            </span>
          </span>{' '}
          <span className='overflow-hidden'>
            <span className='block translate-y-full animate-fade-in-headline-delay'>
              with Consciousness.
            </span>
          </span>
        </h1>
      </header>
      <Introducing />
      <Projects />
    </main>
  )
}
