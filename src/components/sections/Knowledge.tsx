import HeadlineMarquee from '@/components/shared/HeadlineMarquee'
import Approach from '@/components/knowledge/Approach'
import Clients from '@/components/knowledge/Clients'
import Experience from '@/components/knowledge/Experience'
import Education from '@/components/knowledge/Education'
import { getScopedI18n } from '@/lib/i18n/server'

export default async function Knowledge() {
  const t = await getScopedI18n('home.knowledge')

  return (
    <section
      id='knowledge'
      className='pt-20 pb-24 xl:pt-32 xl:pb-40 bg-kili-dark-gray'
    >
      <HeadlineMarquee
        className='text-6xl text-kili-white xl:text-10xl'
        baseVelocity={-3}
      >
        {t('sectionTitle')}
      </HeadlineMarquee>
      <section className='px-6 pt-12 xl:px-40 xl:pt-32'>
        <div className='flex flex-col gap-6 xl:gap-0'>
          <Approach />
          <Education />
          <Experience />
          <Clients />
        </div>
      </section>
    </section>
  )
}
