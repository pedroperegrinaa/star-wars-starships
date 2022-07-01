import getStarships from './getStarships'
import { yellow } from 'colors'

import calcConsumablesTime from './calcConsumiblesTime'

async function showDistance (distance: number) {
  const starships = await getStarships()

  starships.forEach(starship => {
    if (starship.MGLT === 'unknown') return

    console.log(yellow(`🚀 Starship: ${starship.name}`))
    calcConsumablesTime(starship.consumables, starship.MGLT, distance)
  })
}

showDistance(1000000)
