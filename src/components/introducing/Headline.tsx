import Balancer from 'react-wrap-balancer'

export default function Headline({ headline }: { headline: string }) {
  return (
    <h2 className='xl:w-[48vw] 2xl:w-[39vw] xl:-mt-28 text-kili-white text-4xl leading-tight xl:text-6xl 2xl:text-7xl xl:leading-none'>
      <Balancer>{headline}</Balancer>
    </h2>
  )
}
