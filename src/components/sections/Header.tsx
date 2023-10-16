import ScrollButton from '@/components/header/ScrollButton'
import Headline from '@/components/header/Headline'

export default function Header() {
  return (
    <header className='relative flex items-center justify-center px-6 overflow-hidden py-44 xl:py-0 xl:min-h-screen'>
      <Headline />
      <ScrollButton />
    </header>
  )
}
