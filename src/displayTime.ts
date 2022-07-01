import { magenta } from 'colors'

export default function displayTime (MGLTTotalHours, consumable, time) {
  if (time[1].substr(0, 3) === 'day') return console.log(magenta(`⛽ Ressuplies: ${Math.floor(MGLTTotalHours / (24 * time[0]))} \n`))

  if (time[1].substr(0, 4) === 'week') return console.log(magenta(`⛽ Ressuplies: ${Math.floor(MGLTTotalHours / (168 * time[0]))} \n`))

  if (time[1].substr(0, 5) === 'month') return console.log(magenta(`⛽ Ressuplies: ${Math.floor(MGLTTotalHours / (730 * time[0]))} \n`))

  if (time[1].substr(0, 4) === 'year') return console.log(magenta(`⛽ Ressuplies: ${Math.floor(MGLTTotalHours / (8765 * time[0]))} \n`))
}
