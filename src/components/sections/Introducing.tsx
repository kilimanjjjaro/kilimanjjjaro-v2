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
    <section
      id='introducing-me'
      className='pt-20 pb-24 xl:pt-32 xl:pb-24 bg-kili-dark-gray'
    >
      <HeadlineMarquee
        className='text-6xl text-kili-white xl:text-10xl'
        baseVelocity={-2}
      >
        {t('sectionTitle')}
      </HeadlineMarquee>
      <main className='flex flex-col items-center px-6 pt-12 xl:py-32 xl:px-40'>
        <Portrait />
        <div className='flex flex-col gap-6 mt-10 xl:mt-0 xl:gap-0 mix-blend-difference'>
          <Headline headline={headline} />
          <div className='grid items-end content-start xl:grid-cols-2 gap-6 xl:gap-[19vw] justify-items-start'>
            <LetsTalkButton />
            <Biography biography={biography} />
          </div>
        </div>
      </main>
      <footer className='flex flex-col gap-8 overflow-hidden mt-14 xl:gap-20 xl:mt-0'>
        <StackSelector />
        <SkillsCarousel />
      </footer>
    </section>
  )
}
