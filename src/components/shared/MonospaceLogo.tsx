interface Props {
  className: string
}

export default function MonospaceLogo({ className }: Props) {
  return <h1 className={`font-medium ${className}`}>Monospace</h1>
}
