import Image from 'next/image'
import Header from '@/components/introducing/Header'
import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import portraitImage from '../../../public/images/portrait.webp'

export default function Introducing() {
  return (
    <>
      <Header />
      <section
        className='flex flex-col items-center px-60 pb-36'
        id='introducing'
      >
        <Image
          className='-mt-16'
          src={portraitImage}
          alt='Kilimanjjjaro'
          quality={90}
          priority
        />
        <div className='flex flex-col'>
          <h2 className='w-1/2 -mt-28 text-kili-white text-7xl'>
            Full Stack JavaScript Developer & UX/UI Designer with +5 years of
            work experience.
          </h2>
          <div className='grid items-end content-start grid-cols-2 gap-40 justify-items-start'>
            <button className='text-3xl text-kili-white relative after:w-full after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:block after:bg-current hover:after:origin-bottom-right after:origin-bottom-left hover:after:scale-0 after:transition-transform after:ease-in-out after:duration-500 after:will-change-transform'>
              Let's talk!
            </button>
            <p className='text-3xl leading-tight text-kili-white indent-10'>
              <i>— Hello,</i> my name is Gonzalo and I am 30 years old. In my
              experience, I learned that the difference lies in taking care of
              the details and applying good practices. I am excited to approach
              solutions in an efficient and simple way.
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-20 pb-24 overflow-hidden'>
        <StackSelector />
        <SkillsCarousel />
      </section>
    </>
  )
}
