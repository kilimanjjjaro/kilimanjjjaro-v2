import Image from 'next/image'

export default function ImageGrid({
  name,
  heroVideo,
  gallery
}: {
  name: string
  heroVideo: string
  gallery: string[]
}) {
  return (
    <section className='grid grid-cols-3 px-40 pb-36 gap-36'>
      <video
        className='col-span-3'
        src={heroVideo}
        autoPlay
        playsInline
        loop
        muted
      />
      <Image src={gallery[0]} width={824} height={1508} alt='' />
      <video src={gallery[1]} autoPlay playsInline loop muted />
      <Image src={gallery[2]} width={824} height={1508} alt={name} />
      <video
        className='col-span-3'
        src={gallery[3]}
        autoPlay
        playsInline
        loop
        muted
      />
      <Image src={gallery[4]} width={824} height={1508} alt='' />
      <video src={gallery[5]} autoPlay playsInline loop muted />
      <Image src={gallery[6]} width={824} height={1508} alt={name} />
    </section>
  )
}
