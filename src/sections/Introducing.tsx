import Image from 'next/image'
import Header from '@/components/introducing/Header'
import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Paragraph from '@/components/introducing/Paragraph'
import portraitImage from '../../public/images/portrait.webp'

export default function Introducing() {
  return (
    <>
      <Header />
      <section
        className='flex flex-col items-center px-40 pb-36'
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
          <Headline />
          <div className='grid items-end content-start grid-cols-2 gap-[19vw] justify-items-start'>
            <LetsTalkButton />
            <Paragraph />
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-20 pb-20 overflow-hidden'>
        <StackSelector />
        <SkillsCarousel />
      </section>
    </>
  )
}
