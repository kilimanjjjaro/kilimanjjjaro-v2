import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Paragraph from '@/components/introducing/Paragraph'
import Portrait from '@/components/introducing/Portrait'

export default function Introducing() {
  return (
    <section className='pt-24 pb-20' id='introducing'>
      <div className='flex flex-col items-center px-40 mb-36'>
        <Portrait />
        <div className='flex flex-col'>
          <Headline />
          <div className='grid items-end content-start grid-cols-2 gap-[19vw] justify-items-start'>
            <LetsTalkButton />
            <Paragraph />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-20 overflow-hidden'>
        <StackSelector />
        <SkillsCarousel />
      </div>
    </section>
  )
}
