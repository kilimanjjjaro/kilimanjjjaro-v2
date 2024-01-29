interface Props {
  className: string
}

export default function MonospaceLogo({ className }: Props) {
  return (
    <h1 className={`uppercase font-black leading-none ${className}`}>
      Monospace
    </h1>
  )
}
