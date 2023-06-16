import Link from 'next/link'
import KilimanjjjaroLogo from '@/components/KilimanjjjaroLogo'
import NavBar from '@/components/NavBar'

export default function Header() {
  return (
    <header className='flex items-center justify-between px-10 pt-10'>
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
