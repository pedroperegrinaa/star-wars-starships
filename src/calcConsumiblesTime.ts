import displayTime from './displayTime'
import { cyan } from 'colors'

export default function calcConsumablesTime (consumables, MGLTHours, distance) {
  const MGLTTotalHours = (distance / MGLTHours)

  console.log(cyan(`⌛ Time: ${consumables}`))

  const time = consumables.split(' ')

  if (time[1].substr(0, 3) === 'day') displayTime(MGLTTotalHours, consumables, time)

  if (time[1].substr(0, 4) === 'week') displayTime(MGLTTotalHours, consumables, time)

  if (time[1].substr(0, 5) === 'month') displayTime(MGLTTotalHours, consumables, time)

  if (time[1].substr(0, 4) === 'year') displayTime(MGLTTotalHours, consumables, time)
}
