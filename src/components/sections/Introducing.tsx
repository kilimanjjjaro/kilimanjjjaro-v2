import StackSelector from '@/components/introducing/StackSelector'
import SkillsCarousel from '@/components/introducing/SkillsCarousel'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Biography from '@/components/introducing/Biography'
import Portrait from '@/components/introducing/Portrait'
import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
import { getScopedI18n } from '@/lib/i18n/server'
import { YEARS_OF_EXPERIENCE, YEARS_OLD } from '@/lib/constants/general'

export default async function Introducing() {
  const t = await getScopedI18n('home.introducing')

  const headline = t('headline', { experience: YEARS_OF_EXPERIENCE })
  const biography = t('biography', { yearsOld: YEARS_OLD })

  return (
    <section id='introducing-me' className='pt-20 xl:pt-32 bg-kili-dark-gray'>
      <HeadlineMarquee
        className='text-6xl text-kili-white xl:text-10xl'
        baseVelocity={-3}
      >
        {t('sectionTitle')}
      </HeadlineMarquee>
      <div className='flex flex-col items-center gap-6 px-6 pt-20 xl:py-32 xl:gap-0 xl:px-40'>
        <Portrait />
        <div className='flex flex-col gap-6 xl:gap-0 mix-blend-difference'>
          <Headline headline={headline} />
          <div className='grid items-end content-start xl:grid-cols-2 gap-6 xl:gap-[19vw] justify-items-start'>
            <LetsTalkButton letsTalkButton={t('letsTalkButton')} />
            <Biography biography={biography} />
          </div>
        </div>
      </div>
      <div className='flex flex-col pb-24 overflow-hidden xl:gap-20'>
        <StackSelector />
        <SkillsCarousel />
      </div>
    </section>
  )
}
