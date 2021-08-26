import { action } from 'easy-peasy'

export default {
  nextPiles: [
    {distance: null, pile_id: null},
    {distance: null, pile_id: null},
  ],
  setNextPiles: action((state, nextPiles) => {
    state.nextPiles = [...nextPiles]
  }),

  clearPile: action((state, index) => {
    let tempPiles = [...state.nextPiles]
    tempPiles[index] = {}
    state.nextPiles = tempPiles 
  }),

  waypoints: [],
  setWaypoints: action((state, waypoints) => {
    state.waypoints = [...waypoints]
  }),
  placeWaypoint: action((state, id) => {
    state.waypoints = state.waypoints.map(waypoint => { 
      return waypoint.pile_id == id ? {...waypoint, placed: true} : waypoint
    })
  }),
  unplaceWaypoint: action((state, id) => {
    state.waypoints = state.waypoints.map(waypoint => {
      return waypoint.pile_id == id ? {...waypoint, placed: false} : waypoint
    })
  }),

  selectedColor: '',
  setSelectedColor: action((state, color) => { state.selectedColor = color})
}