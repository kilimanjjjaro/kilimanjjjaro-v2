import ScrollCursor from '@/components/header/ScrollCursor'
import Headline from '@/components/header/Headline'

export default function Header() {
  return (
    <header
      id='header'
      className='flex items-center justify-center min-h-screen'
    >
      <ScrollCursor />
      <Headline />
    </header>
  )
}
