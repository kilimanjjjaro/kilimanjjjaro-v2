import LanguageSelector from '@/components/footer/LanguageSelector'
import ScrollPercentage from '@/components/footer/ScrollPercentage'

export default function Footer() {
  return (
    <footer className='mix-blend-difference'>
      <div className='fixed bottom-10 left-10'>
        <LanguageSelector />
      </div>
      <div className='fixed text-lg italic text-kilimanjjjaro-light-gray bottom-10 right-10'>
        <ScrollPercentage />
      </div>
    </footer>
  )
}
