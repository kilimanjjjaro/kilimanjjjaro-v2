import Balancer from 'react-wrap-balancer'

export default function Description({ description }: { description: string }) {
  return (
    <p className='text-3xl leading-tight text-kili-white [&>span]:first-letter:ml-7'>
      <Balancer>{description}</Balancer>
    </p>
  )
}
