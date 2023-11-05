import LargeNavigation from '@/components/navbar/LargeNavigation'
import SmallNavigation from '@/components/navbar/SmallNavigation'

export default function Navbar() {
  return (
    <header className='fixed flex items-start left-20 right-20 z-50 top-16 mix-blend-difference'>
      <LargeNavigation />
      <SmallNavigation />
    </header>
  )
}
