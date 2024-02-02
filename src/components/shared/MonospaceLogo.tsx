interface Props {
  className: string
}

export default function MonospaceLogo({ className }: Props) {
  return <h1 className={`font-medium leading-none ${className}`}>Monospace</h1>
}
