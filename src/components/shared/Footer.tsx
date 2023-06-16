import LanguageSelector from '@/components/shared/LanguageSelector'

export default function Footer() {
  return (
    <footer>
      <div className='fixed bottom-10 left-10'>
        <LanguageSelector />
      </div>
      <div className='fixed text-lg italic text-kilimanjjjaro-light-gray bottom-10 right-10'>
        10%
      </div>
    </footer>
  )
}
