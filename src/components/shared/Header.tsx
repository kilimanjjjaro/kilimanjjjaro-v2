import Link from 'next/link'
import KilimanjjjaroLogo from '@/components/shared/KilimanjjjaroLogo'
import NavBar from '@/components/shared/NavBar'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 flex items-center justify-between w-full px-10 pt-10'>
      <Link
        className='w-20 ease-in-out text-kilimanjjjaro-light-gray hover:text-kilimanjjjaro-white duration-400'
        style={{ clipPath: 'circle(50% at 50% 50%)' }}
        href='/'
      >
        <KilimanjjjaroLogo />
      </Link>
      <NavBar />
    </header>
  )
}
