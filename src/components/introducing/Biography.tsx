import Balancer from 'react-wrap-balancer'

export default function Biography({ biography }: { biography: string }) {
  return (
    <p className='text-3xl leading-tight text-kili-white'>
      <Balancer>{biography}</Balancer>
    </p>
  )
}
