import Aside from '@components/header/Aside'

export default function Header() {
  return (
    <header className='h-100-vh sticky top-0 flex w-full items-end bg-monospace-dark-gray p-16'>
      <Aside />
    </header>
  )
}
