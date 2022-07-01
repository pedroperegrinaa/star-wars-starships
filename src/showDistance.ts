import getStarships from './getStarships'
import { yellow } from 'colors'

import calcConsumablesTime from './calcConsumiblesTime'
const { SWStarships } = require('./asciiArt')

export default async function showDistance (distance: number) {
  console.log(yellow(SWStarships))

  const starships = await getStarships()

  starships.forEach(starship => {
    if (starship.MGLT === 'unknown') return

    console.log(yellow(`🚀 Starship: ${starship.name}`))
    calcConsumablesTime(starship.consumables, starship.MGLT, distance)
  })
}

// showDistance(1000000)
