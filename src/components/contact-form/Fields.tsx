export default function Fields() {
  return (
    <>
      <label className='flex flex-col text-kili-light-gray'>
        Your name:
        <input
          className='text-lg bg-transparent text-kili-white placeholder:animate-pulse'
          type='text'
          name='name'
          placeholder='|'
          required
        />
      </label>
      <label className='flex flex-col text-kili-light-gray'>
        Your email:
        <input
          className='text-lg bg-transparent text-kili-white'
          type='email'
          name='email'
          placeholder='|'
          required
        />
      </label>
      <label className='flex flex-col text-kili-light-gray'>
        Your message:
        <textarea
          className='text-lg bg-transparent resize-none text-kili-white'
          name='message'
          placeholder='|'
          rows={4}
          required
        />
      </label>
    </>
  )
}
