import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Biography from '@/components/introducing/Biography'
import Portrait from '@/components/introducing/Portrait'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'
import { getScopedI18n } from '@/lib/i18n/server'
import { YEARS_OF_EXPERIENCE, YEARS_OLD } from '@/lib/constants/general'

export default async function Introducing() {
  const t = await getScopedI18n('home.introducing')

  const headline = t('headline', { experience: YEARS_OF_EXPERIENCE })
  const biography = t('biography', { yearsOld: YEARS_OLD })

  return (
    <section id='introducing-me' className='pt-32 bg-kili-dark-gray'>
      <ParallaxHeadline className='text-kili-white text-10xl' baseVelocity={-3}>
        {t('sectionTitle')}
      </ParallaxHeadline>
      <div className='flex flex-col items-center px-40 py-32'>
        <Portrait />
        <div className='flex flex-col mix-blend-difference'>
          <Headline headline={headline} />
          <div className='grid items-end content-start grid-cols-2 gap-[19vw] justify-items-start'>
            <LetsTalkButton letsTalkButton={t('letsTalkButton')} />
            <Biography biography={biography} />
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
