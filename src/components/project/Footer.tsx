interface Props {
  stacks: string[]
  role: string
  year: string
}

export default function Footer({ stacks, role, year }: Props) {
  return (
    <footer className='grid grid-cols-3 px-40 pb-36 gap-36'>
      <div>
        <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
          Stacks
        </h3>
        <ul className='flex flex-wrap flex-1 gap-4'>
          {stacks.map((stack, index) => (
            <li
              key={index}
              className='px-5 pt-2 pb-[7px] text-4xl border-2 rounded-full text-kili-white border-kili-light-gray'
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
          Role
        </h3>
        <p className='text-4xl text-kili-white'>{role}</p>
      </div>
      <div>
        <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
          Year
        </h3>
        <p className='text-4xl text-kili-white'>{year}</p>
      </div>
    </footer>
  )
}
