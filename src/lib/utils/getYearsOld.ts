export default function getYearsOld() {
  const birthDate = new Date(1992, 11, 10)
  const currentDate = new Date()

  const age = currentDate.getFullYear() - birthDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  if (
    currentMonth < birthDate.getMonth() ||
    (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())
  ) {
    return age - 1
  }

  return age
}
