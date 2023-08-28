import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import type { FeaturedProjectInterface } from '@/interfaces/general'

interface Props {
  project: FeaturedProjectInterface
}

export default function Grid({ project }: Props) {
  return (
    <section id='blur' className='grid grid-cols-3 px-40 pb-36 gap-36'>
      <video
        className='col-span-3'
        src={project.presentation.heroVideo}
        autoPlay
        playsInline
        loop
        muted
      />
      <Image
        src={project.gallery[0]}
        width={824}
        height={1508}
        alt=''
        quality={100}
        loading='lazy'
      />
      <video src={project.gallery[1]} autoPlay playsInline loop muted />
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
        className='col-span-3'
        src={project.gallery[3]}
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
      <video src={project.gallery[5]} autoPlay playsInline loop muted />
      <Image
        src={project.gallery[6]}
        width={824}
        height={1508}
        alt={project.name}
        loading='lazy'
      />
    </section>
  )
}
