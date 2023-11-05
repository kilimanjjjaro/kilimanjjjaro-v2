import LargeVariant from '@/components/navbar/LargeVariant'
import SmallVariant from '@/components/navbar/SmallVariant'

export default function Navbar() {
  return (
    <header className='fixed flex items-start left-20 right-20 z-50 top-16 mix-blend-difference'>
      <LargeVariant />
      <SmallVariant />
    </header>
  )
}
