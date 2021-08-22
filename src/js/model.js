import { action } from 'easy-peasy'

export default {
  nextPiles: [{},{}],
  setNextPiles: action((state, nextPiles) => {state.nextPiles = [...nextPiles]}),
  waypoints: [],
  setWaypoints: action((state, waypoints) => {state.waypoints = [...waypoints]}),
  placeWaypoint: action((state, id) => state.waypoints.map(waypoint => waypoint.id == id ? {...waypoint, placed: true} : waypoint)),
  unplaceWaypoint: action((state, id) => state.waypoints.map(waypoint => waypoint.id == id ? {...waypoint, placed: false} : waypoint)),
}