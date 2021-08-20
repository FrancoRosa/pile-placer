import { action } from 'easy-peasy'

export default {
  nextPiles: [],
  setNextPiles: action((state, nextPiles) => {state.nextPiles = [...nextPiles]}),
}