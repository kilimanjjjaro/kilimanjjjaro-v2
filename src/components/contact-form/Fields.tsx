'use client'

import { useRef } from 'react'

export default function Fields() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = () => {
    if (textAreaRef.current === null) return

    const scrollHeight = textAreaRef.current.scrollHeight
    textAreaRef.current.style.height = `${scrollHeight}px`
  }

  return (
    <div className='flex flex-col gap-6 py-6'>
      <div className='absolute flex justify-between text-sm px-4 items-center bg-[#00ff00] h-6 left-0 top-0 w-full'>
        <span>GNU nano 2.8.4</span>
        <span>Please, fill in the form =)</span>
      </div>
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your name:
        <input
          className='text-lg placeholder-opacity-100 bg-transparent outline-none caret-transparent text-kili-white placeholder:text-kili-white placeholder-shown:animate-typing focus:outline-none peer'
          type='text'
          name='name'
          placeholder='|'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your email:
        <input
          className='text-lg placeholder-opacity-100 bg-transparent outline-none caret-transparent text-kili-white placeholder:text-kili-white placeholder-shown:animate-typing focus:outline-none'
          type='email'
          name='email'
          placeholder='|'
          required
        />
      </label>
      <label className='flex flex-col transition-colors duration-700 ease-in-out text-kili-light-gray focus-within:text-kili-white'>
        Your message:
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          className='text-lg bg-transparent outline-none resize-none h-7 caret-transparent text-kili-white placeholder:text-kili-white placeholder-shown:animate-typing focus:outline-none'
          name='message'
          placeholder='|'
          rows={1}
          required
        />
      </label>
    </div>
  )
}
