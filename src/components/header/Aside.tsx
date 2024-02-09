'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Aside() {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 980])

  return (
    <motion.div className='w-full overflow-hidden' style={{ y }}>
      <motion.svg
        className='fill-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 1758 276'
        initial={{ y: '102%' }}
        animate={{
          y: '0%',
          transition: {
            duration: 0.7,
            ease: [0.65, 0.05, 0.36, 1]
          }
        }}
      >
        <path d='M1595.51 143.2c0-17.92 3.41-33.493 10.24-46.72 6.83-13.44 16.53-23.787 29.12-31.04s27.2-10.88 43.84-10.88c14.72 0 27.95 3.307 39.68 9.92 11.73 6.613 21.12 16.64 28.16 30.08 7.04 13.227 10.77 29.547 11.2 48.96v10.56h-120.64c.85 14.507 4.91 25.813 12.16 33.92 7.25 7.893 17.07 11.84 29.44 11.84 7.89 0 15.04-2.027 21.44-6.08 6.61-4.267 11.52-10.133 14.72-17.6l40.64 2.88c-5.12 16.213-14.72 29.12-28.8 38.72-13.87 9.387-29.87 14.08-48 14.08-16.64 0-31.25-3.627-43.84-10.88-12.59-7.253-22.29-17.6-29.12-31.04-6.83-13.44-10.24-29.013-10.24-46.72Zm121.28-16.32c-1.71-13.867-6.08-24.107-13.12-30.72-6.83-6.613-15.15-9.92-24.96-9.92-11.52 0-20.8 3.627-27.84 10.88-7.04 7.04-11.52 16.96-13.44 29.76h79.36ZM1529.25 120.16c-1.49-10.453-5.65-18.56-12.48-24.32-6.82-5.76-14.93-8.64-24.32-8.64-13.44 0-23.89 4.907-31.36 14.72-7.25 9.813-10.88 23.573-10.88 41.28s3.63 31.467 10.88 41.28c7.47 9.813 17.92 14.72 31.36 14.72 10.03 0 18.46-2.987 25.28-8.96 6.83-6.187 11.1-14.933 12.8-26.24l40.96 1.92c-1.49 13.44-5.86 25.173-13.12 35.2-7.25 9.813-16.64 17.387-28.16 22.72-11.3 5.333-23.89 8-37.76 8-16.64 0-31.25-3.627-43.84-10.88-12.37-7.253-22.08-17.6-29.12-31.04-6.82-13.44-10.24-29.013-10.24-46.72 0-17.92 3.42-33.493 10.24-46.72 7.04-13.44 16.75-23.787 29.12-31.04 12.59-7.253 27.2-10.88 43.84-10.88 13.44 0 25.82 2.56 37.12 7.68 11.31 5.12 20.48 12.48 27.52 22.08 7.26 9.6 11.63 20.8 13.12 33.6l-40.96 2.24ZM1222.76 109.92c3.41-17.493 11.62-31.04 24.64-40.64 13.01-9.813 29.76-14.72 50.24-14.72 24.32 0 42.77 6.187 55.36 18.56 12.58 12.373 18.88 30.4 18.88 54.08v59.2c0 4.48.85 7.68 2.56 9.6 1.92 1.707 4.58 2.56 8 2.56h6.4V228l-9.92.32h-1.28c-5.76.213-11.63-.213-17.6-1.28-5.76-1.067-10.88-3.52-15.36-7.36-4.48-3.84-7.04-9.707-7.68-17.6-4.27 8.747-11.2 15.893-20.8 21.44-9.6 5.547-21.34 8.32-35.2 8.32-17.5 0-32.11-4.373-43.84-13.12-11.52-8.96-17.28-20.693-17.28-35.2 0-10.667 2.45-19.307 7.36-25.92 5.12-6.613 12.16-11.84 21.12-15.68 9.17-3.84 21.12-7.147 35.84-9.92l47.68-9.6c-.22-13.013-3.1-22.613-8.64-28.8-5.55-6.4-14.08-9.6-25.6-9.6-8.96 0-16.43 2.453-22.4 7.36-5.76 4.693-9.71 11.627-11.84 20.8l-40.64-2.24Zm38.08 72.32c0 6.187 2.56 11.307 7.68 15.36 5.33 3.84 12.9 5.76 22.72 5.76 7.89 0 14.93-1.92 21.12-5.76 6.4-3.84 11.3-9.6 14.72-17.28 3.62-7.893 5.44-17.387 5.44-28.48v-1.6l-32.64 5.76-5.76.96c-7.9 1.493-14.08 2.987-18.56 4.48-4.27 1.493-7.79 3.947-10.56 7.36-2.78 3.2-4.16 7.68-4.16 13.44ZM1028.88 58.4h37.43l1.28 35.52-3.19-4.16c4.26-11.307 10.98-19.947 20.16-25.92 9.38-6.187 20.69-9.28 33.91-9.28 15.79 0 29.12 3.947 40 11.84 10.88 7.893 18.99 18.56 24.33 32 5.54 13.227 8.31 28.16 8.31 44.8 0 16.64-2.77 31.68-8.31 45.12-5.34 13.227-13.45 23.787-24.33 31.68-10.88 7.893-24.21 11.84-40 11.84-8.74 0-16.74-1.387-24-4.16-7.04-2.773-13.12-6.827-18.24-12.16-4.9-5.333-8.74-11.947-11.52-19.84l3.85-3.2V276h-39.68V58.4Zm36.47 84.8c0 10.24 1.5 19.627 4.48 28.16 3.2 8.32 8 15.04 14.4 20.16 6.4 5.12 14.19 7.68 23.36 7.68 13.87 0 24.32-5.333 31.36-16 7.26-10.667 10.88-24 10.88-40 0-15.787-3.62-29.12-10.88-40-7.04-10.88-17.49-16.32-31.36-16.32-9.17 0-16.96 2.667-23.36 8-6.4 5.12-11.2 11.947-14.4 20.48-2.98 8.32-4.48 17.6-4.48 27.84ZM951.497 112.48c-1.706-8.533-5.973-15.253-12.799-20.16-6.614-4.907-14.081-7.36-22.401-7.36s-15.253 2.027-20.8 6.08c-5.333 4.053-8 9.387-8 16 .214 6.613 3.52 11.733 9.92 15.36 6.4 3.413 14.721 6.08 24.961 8 16.213 2.773 29.44 6.187 39.679 10.24 10.24 3.84 18.027 9.173 23.36 16 5.547 6.827 8.32 15.573 8.32 26.24 0 10.88-3.199 19.947-9.599 27.2s-15.04 12.693-25.92 16.32c-10.667 3.627-22.721 5.44-36.161 5.44-15.146 0-28.586-2.347-40.32-7.04-11.733-4.693-21.013-11.307-27.839-19.84-6.614-8.747-10.454-18.987-11.52-30.72l40.64-2.24c1.066 6.187 3.199 11.413 6.399 15.68 3.414 4.267 7.787 7.573 13.12 9.92 5.334 2.347 11.627 3.52 18.88 3.52 8.32 0 15.574-1.6 21.76-4.8 6.4-3.2 9.601-8.107 9.601-14.72 0-4.48-1.387-8.107-4.161-10.88-2.56-2.773-5.866-4.8-9.919-6.08-3.84-1.493-9.174-2.987-16-4.48-1.707-.213-4.054-.747-7.04-1.6-15.574-3.2-28.16-6.613-37.76-10.24-9.6-3.627-17.281-8.64-23.041-15.04-5.546-6.613-8.32-15.04-8.32-25.28 0-10.88 2.88-20.373 8.64-28.48 5.974-8.107 14.294-14.293 24.961-18.56 10.88-4.48 23.679-6.72 38.399-6.72 19.627 0 35.947 5.12 48.96 15.36 13.227 10.027 21.227 23.68 24 40.96l-40 1.92ZM732.14 231.84c-16.64 0-31.253-3.627-43.84-10.88-12.373-7.253-22.08-17.6-29.12-31.04-6.827-13.44-10.24-29.013-10.24-46.72 0-17.92 3.413-33.493 10.24-46.72 7.04-13.44 16.747-23.787 29.12-31.04 12.587-7.253 27.2-10.88 43.84-10.88 16.64 0 31.253 3.627 43.84 10.88 12.587 7.253 22.293 17.6 29.12 31.04 6.827 13.227 10.24 28.8 10.24 46.72 0 17.707-3.413 33.28-10.24 46.72-6.827 13.44-16.533 23.787-29.12 31.04s-27.2 10.88-43.84 10.88Zm0-32.64c13.653 0 24.107-4.907 31.36-14.72s10.88-23.573 10.88-41.28-3.627-31.467-10.88-41.28c-7.253-9.813-17.707-14.72-31.36-14.72-13.44 0-23.893 4.907-31.36 14.72-7.253 9.813-10.88 23.573-10.88 41.28s3.627 31.467 10.88 41.28c7.467 9.813 17.92 14.72 31.36 14.72ZM507.528 58.4l1.92 47.04-5.12-2.88c2.56-16.427 8.746-28.48 18.56-36.16 10.026-7.893 22.293-11.84 36.8-11.84 18.559 0 32.853 5.867 42.88 17.6 10.026 11.52 15.039 27.093 15.039 46.72V228h-39.68v-96.64c0-10.027-.96-18.24-2.88-24.64-1.92-6.4-5.119-11.307-9.599-14.72-4.267-3.413-10.027-5.12-17.281-5.12-11.52 0-20.586 3.84-27.199 11.52-6.4 7.467-9.601 18.453-9.601 32.96V228h-39.679V58.4h35.84ZM353.39 231.84c-16.64 0-31.253-3.627-43.84-10.88-12.373-7.253-22.08-17.6-29.12-31.04-6.827-13.44-10.24-29.013-10.24-46.72 0-17.92 3.413-33.493 10.24-46.72 7.04-13.44 16.747-23.787 29.12-31.04 12.587-7.253 27.2-10.88 43.84-10.88 16.64 0 31.253 3.627 43.84 10.88 12.587 7.253 22.293 17.6 29.12 31.04 6.827 13.227 10.24 28.8 10.24 46.72 0 17.707-3.413 33.28-10.24 46.72-6.827 13.44-16.533 23.787-29.12 31.04s-27.2 10.88-43.84 10.88Zm0-32.64c13.653 0 24.107-4.907 31.36-14.72s10.88-23.573 10.88-41.28-3.627-31.467-10.88-41.28c-7.253-9.813-17.707-14.72-31.36-14.72-13.44 0-23.893 4.907-31.36 14.72-7.253 9.813-10.88 23.573-10.88 41.28s3.627 31.467 10.88 41.28c7.467 9.813 17.92 14.72 31.36 14.72ZM54.57.8l63.68 178.24L181.61.8h54.4V228h-40.32V70.88l-57.28 156.8H98.09L40.81 70.88V228H.49V.8h54.08Z' />
      </motion.svg>
    </motion.div>
  )
}
