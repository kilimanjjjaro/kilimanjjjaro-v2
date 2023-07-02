import Paragraph from '@/components/projects/Paragraph'
import ParallaxHeadline from '@/components/shared/ParallaxHeadline'

export default function Projects() {
  return (
    <section className='px-24 pt-32 pb-36 bg-kili-dark-gray' id='projects'>
      <ParallaxHeadline
        className='text-kili-white text-[180px] leading-none uppercase'
        baseVelocity={-2}
      >
        Projects
      </ParallaxHeadline>
      <section className='px-32 mt-32'>
        <Paragraph />
      </section>
    </section>
  )
}
