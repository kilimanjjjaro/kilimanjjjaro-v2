import Aside from '@/components/header/Aside'
import Images from '@/components/header/Images'

export default function Header() {
  return (
    <header className='flex items-center justify-center px-6 pt-48 pb-44 xl:py-0 xl:min-h-screen'>
      <Aside />
      <Images />
    </header>
  )
}
