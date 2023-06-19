import Image from 'next/image'
import portraitImage from '../../../public/images/portrait.webp'
import SkillsCarousel from './SkillsCarousel'

export default function Introducing() {
  return (
    <>
      <header className='flex items-center min-h-screen' id='introducing'>
        <h1 className='text-kilimanjjjaro-white text-[180px] leading-none uppercase text-center'>
          Developing <i>&</i> Designing <i>with</i> Consciousness.
        </h1>
      </header>
      <section className='flex flex-col items-center px-60 pb-36'>
        <Image
          className='-mt-16'
          src={portraitImage}
          alt='Kilimanjjjaro'
          quality={90}
          priority
        />
        <section className='flex flex-col w-full'>
          <h2 className='w-1/2 -mt-28 text-kilimanjjjaro-white text-7xl'>
            Full Stack JavaScript Developer & UX/UI Designer with +5 years of
            work experience.
          </h2>
          <div className='grid items-end content-start grid-cols-2 gap-40 justify-items-start'>
            <button className='text-3xl text-kilimanjjjaro-white relative after:w-full after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:block after:bg-current hover:after:origin-bottom-right after:origin-bottom-left hover:after:scale-0 after:transition-transform after:ease-in-out after:duration-400 after:will-change-transform'>
              Let's talk!
            </button>
            <p className='text-3xl leading-tight text-kilimanjjjaro-white indent-10'>
              <i>— Hello,</i> my name is Gonzalo and I am 30 years old. In my
              experience, I learned that the difference lies in taking care of
              the details and applying good practices. I am excited to approach
              solutions in an efficient and simple way.
            </p>
          </div>
          <div className='mt-36'>
            <h2 className='text-4xl text-kilimanjjjaro-white'>
              Frontend Skills
            </h2>
            <SkillsCarousel />
          </div>
        </section>
      </section>
    </>
  )
}
