import LanguageSelector from '@/components/footer/LanguageSelector'
import ScrollPercentage from '@/components/footer/ScrollPercentage'

export default function Footer() {
  return (
    <footer className='mix-blend-difference'>
      <div className='fixed bottom-8 left-8'>
        <LanguageSelector />
      </div>
      <div className='fixed italic text-kili-light-gray bottom-8 right-8'>
        <ScrollPercentage />
      </div>
    </footer>
  )
}
