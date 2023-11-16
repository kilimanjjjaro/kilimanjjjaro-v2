import LiquidBackgroundScene from '@/components/scenes/liquid-background/Scene'
import Aside from '@/components/header/Aside'
import Headline from '../header/Headline'

export default function Header() {
  return (
    <header className='relative flex items-center justify-center px-6 pt-48 pb-44 xl:p-0 min-h-screen xl:w-full'>
      <LiquidBackgroundScene />
      <Headline />
      <Aside />
    </header>
  )
}
