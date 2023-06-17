import Image from 'next/image'
import portrait from '../../../public/images/portrait.webp'

export default function Introducing() {
  return (
    <>
      <header className='flex items-center min-h-screen' id='introducing'>
        <h1 className='text-kilimanjjjaro-white text-[180px] leading-none uppercase text-center'>
          Developing <i>&</i> Designing <i>with</i> Consciousness.
        </h1>
      </header>
      <section className='flex flex-col items-center px-60'>
        <Image
          className='-mt-16'
          src={portrait}
          alt='Kilimanjjjaro'
          quality={90}
          priority
        />
        <section>
          <h2 className='w-1/2 -mt-28 text-kilimanjjjaro-white text-7xl'>
            Full Stack JavaScript Developer & UX/UI Designer with +5 years of
            work experience.
          </h2>
          <div className='flex items-center justify-between'>
            <button className='text-3xl text-kilimanjjjaro-white'>
              Let's talk!
            </button>
            <p className='w-1/2 text-3xl text-kilimanjjjaro-white'>
              — Hello, my name is Gonzalo and I am 30 years old. In my
              experience, I learned that the difference lies in taking care of
              the details and applying good practices. I am excited to approach
              solutions in an efficient and simple way.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}
