import Balancer from 'react-wrap-balancer'

export default function Biography({ biography }: { biography: string }) {
  return (
    <p className='order-1 text-2xl leading-tight xl:text-3xl xl:order-2 text-monospace-light-gray xl:text-monospace-white'>
      <Balancer>{biography}</Balancer>
    </p>
  )
}
