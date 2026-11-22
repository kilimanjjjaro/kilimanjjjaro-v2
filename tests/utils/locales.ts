type Shape = string | Shape[] | { [key: string]: Shape }

export function toShape(value: unknown): Shape {
  if (Array.isArray(value)) return value.map(toShape)
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, inner]) => [key, toShape(inner)])
    )
  }
  return typeof value
}

export function findPlaceholders(value: unknown): string[] {
  const text = JSON.stringify(value)

  return (text.match(/\{\w+\}/gv) ?? [])
    .map((token) => token.replace(/[\{\}]/gv, ''))
    .sort((a, b) => a.localeCompare(b))
}
