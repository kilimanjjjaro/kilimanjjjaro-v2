const FOLDERS = [
  'app',
  'components',
  'constants',
  'hooks',
  'interfaces',
  'store'
]

const FILES = ['messages.json', 'issues.json']

export default function CommandLine() {
  return (
    <>
      <div>
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src</p>
        <p className='text-lg text-kili-white'>ls</p>
      </div>
      <div className='grid grid-cols-3'>
        {FOLDERS.map((folder) => (
          <p key={folder} className='text-lg text-kili-white'>
            {folder}
          </p>
        ))}
      </div>
      <div>
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src</p>
        <p className='text-lg text-kili-white'>cd store</p>
      </div>
      <div>
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src/store</p>
        <p className='text-lg text-kili-white'>ls</p>
      </div>
      <div className='grid grid-cols-3'>
        {FILES.map((folder) => (
          <p key={folder} className='text-lg text-kili-white'>
            {folder}
          </p>
        ))}
      </div>
      <div>
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src/store</p>
        <p className='text-lg text-kili-white'>nano messages.json</p>
      </div>
    </>
  )
}
