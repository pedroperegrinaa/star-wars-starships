import axios from 'axios'
import { MockStarships } from './mocks'

import 'dotenv/config'

export default async function getStarships () {
  try {
    if (process.env.NODE_ENV === 'mock') return MockStarships

    const pages = [1, 2, 3, 4]
    const starships:any = []

    for (const page of pages) {
      const result = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)

      result.data.results.forEach(starship => {
        starships.push(starship)
      })
    }
    return starships
  } catch (error) {
    console.log(error.response.data.detail)
  };
}
