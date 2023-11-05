interface Props {
  className: string
}

export default function MonospaceLogo({ className }: Props) {
  return (
    <h1 className={`font-geist-mono leading-none ${className}`}>Monospace</h1>
  )
}
