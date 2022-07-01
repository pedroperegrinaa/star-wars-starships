import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import showDistance from './showDistance'

yargs(hideBin(process.argv))
  .command('distance <distance>', 'Calculate distance MGLT and show all starships', () => {}, (argv) => {
    console.info(argv)
    showDistance(argv.distance)
  })
  .demandCommand(1)
  .parse()
