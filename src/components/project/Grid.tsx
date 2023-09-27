import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import type { FeaturedProjectInterface } from '@/lib/interfaces/general'

interface Props {
  project: FeaturedProjectInterface
}

export default function Grid({ project }: Props) {
  return (
    <section id='blur' className='grid grid-cols-3 px-40 pb-36 gap-36'>
      <video
        className='w-full col-span-3 aspect-video'
        src={project.presentation.video}
        autoPlay
        playsInline
        loop
        muted
      />
      <Image
        src={`/images/projects/${project.slug}/gallery-1.webp`}
        width={437}
        height={778}
        alt=''
        quality={90}
      />
      <video
        className='w-full'
        src={`/images/projects/${project.slug}/gallery-2.webm`}
        autoPlay
        playsInline
        loop
        muted
      />
      <div className='flex flex-col gap-36'>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Year
          </h3>
          <p className='text-4xl text-kili-white'>{project.year}</p>
        </div>
        <div>
          <p className='text-4xl leading-tight text-kili-white'>
            <Balancer>{project.sectionDescription}</Balancer>
          </p>
        </div>
      </div>
      <video
        className='w-full col-span-3 aspect-video'
        src={`/images/projects/${project.slug}/gallery-3.webm`}
        autoPlay
        playsInline
        loop
        muted
      />
      <div className='flex flex-col gap-36'>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Role
          </h3>
          <p className='text-4xl text-kili-white'>{project.role}</p>
        </div>
        <div>
          <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
            Stacks
          </h3>
          <ul className='flex flex-wrap flex-1 gap-4'>
            {project.stacks.map((stack, index) => (
              <li
                key={index}
                className='px-5 pt-2 pb-[7px] text-4xl border-2 rounded-full text-kili-white border-kili-light-gray'
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <video
        className='w-full'
        src={`/images/projects/${project.slug}/gallery-4.webm`}
        autoPlay
        playsInline
        loop
        muted
      />
      <Image
        src={`/images/projects/${project.slug}/gallery-5.webp`}
        width={437}
        height={778}
        alt={project.name}
        quality={90}
        loading='lazy'
      />
    </section>
  )
}
