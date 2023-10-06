import ScrollButton from '@/components/header/ScrollButton'
import Headline from '@/components/header/Headline'

export default function Header() {
  return (
    <header className='relative flex items-center justify-center min-h-screen overflow-hidden'>
      <Headline />
      <ScrollButton />
    </header>
  )
}
