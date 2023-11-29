import Headline from '@/components/header/Headline'
import Aside from '@/components/header/Aside'

export default function Header() {
  return (
    <header className='relative flex items-center justify-center px-6 pt-48 pb-44 xl:p-0 min-h-screen xl:w-full'>
      <Headline />
      <Aside />
    </header>
  )
}
