export default function wrap(min: number, max: number, value: number) {
  const rangeSize = max - min

  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min
}
