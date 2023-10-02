import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Description from '@/components/introducing/Description'
import Portrait from '@/components/introducing/Portrait'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { getScopedI18n } from '@/lib/locales/server'

export default async function Introducing() {
  const t = await getScopedI18n('home.introducing')

  return (
    <section id='introducing' className='pt-32 bg-kili-dark-gray'>
      <ParallaxHeadline
        className='leading-none text-kili-white text-10xl'
        baseVelocity={-3}
      >
        {t('sectionTitle')}
      </ParallaxHeadline>
      <div className='flex flex-col items-center px-40 py-32'>
        <Portrait />
        <div className='flex flex-col'>
          <Headline headline={t('headline', { number: 5 })} />
          <div className='grid items-end content-start grid-cols-2 gap-[19vw] justify-items-start'>
            <LetsTalkButton buttonText={t('buttonText')} />
            <Description description={t('description')} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-20 px-40 pb-24 overflow-hidden'>
        <StackSelector />
        <SkillsCarousel />
      </div>
    </section>
  )
}
