import {
  BIRTH_DAY,
  BIRTH_MONTH_INDEX,
  BIRTH_YEAR,
  BIRTHDAY_PENDING_OFFSET
} from '@/lib/constants/personal'

export default function getYearsOld() {
  const birthDate = new Date(BIRTH_YEAR, BIRTH_MONTH_INDEX, BIRTH_DAY)
  const currentDate = new Date()

  const age = currentDate.getFullYear() - birthDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  if (
    currentMonth < birthDate.getMonth() ||
    (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())
  ) {
    return age - BIRTHDAY_PENDING_OFFSET
  }

  return age
}
