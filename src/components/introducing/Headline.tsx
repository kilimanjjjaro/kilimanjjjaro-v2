export default function Headline({ headline }: { headline: string }) {
  return (
    <h2 className='xl:w-[39vw] xl:-mt-28 text-kili-white text-4xl xl:text-7xl'>
      {headline}
    </h2>
  )
}
