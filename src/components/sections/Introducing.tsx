import StackSelector from '@components/introducing/StackSelector'
import SkillsCarousel from '@components/introducing/SkillsCarousel'
import ContactButton from '@components/introducing/ContactButton'
import Headline from '@components/introducing/Headline'
import Biography from '@components/introducing/Biography'
import Portrait from '@components/introducing/Portrait'
import HeadlineMarquee from '@components/shared/HeadlineMarquee'
import { getScopedI18n } from '@lib/i18n/server'
import { YEARS_OF_EXPERIENCE, YEARS_OLD } from '@lib/constants/general'

export default async function Introducing() {
  const t = await getScopedI18n('home.introducing')

  const headline = t('headline', { experience: YEARS_OF_EXPERIENCE })
  const biography = t('biography', { yearsOld: YEARS_OLD })

  return (
    <section
      id='introducing-me'
      className='bg-monospace-dark-gray pb-24 pt-20 xl:pb-24 xl:pt-32'
    >
      <HeadlineMarquee
        className='text-6xl text-monospace-white xl:text-10xl'
        baseVelocity={-2}
      >
        {t('sectionTitle')}
      </HeadlineMarquee>
      <main className='flex flex-col items-center px-6 pt-12 xl:px-40 xl:py-32'>
        <Portrait />
        <div className='mt-10 flex flex-col gap-6 mix-blend-difference xl:mt-0 xl:gap-0'>
          <Headline headline={headline} />
          <div className='grid content-start items-end justify-items-start gap-6 xl:grid-cols-2 xl:gap-[19vw]'>
            <ContactButton />
            <Biography biography={biography} />
          </div>
        </div>
      </main>
      <footer className='mt-14 flex flex-col gap-8 overflow-hidden xl:mt-0 xl:gap-20'>
        <StackSelector />
        <SkillsCarousel />
      </footer>
    </section>
  )
}
