import { faFlag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from "react"
import { playColor, playOther } from "../js/audio"

const NextPile = ({index}) => {
  const nextPiles = useStoreState(state => state.nextPiles)
  const placeWaypoint = useStoreActions(actions => actions.placeWaypoint)
  const clearPile = useStoreActions(actions => actions.clearPile)
  const waypoint = nextPiles[index]
  
  const handlePilePlacement = () => {
    placeWaypoint(waypoint.pile_id)
    clearPile(index)
  }

  return (
    <div className="column is-one-fifth">
      <p className="title is-5 has-text-centered mt-4"> Next pile: </p>
      
      {waypoint.pile_id &&
        
        <>
          <div className="is-flex is-flex-direction-column is-align-content-center mb-4">
            <p className="heading">Lat: {waypoint.lat?.toFixed(8)}</p>
            <p className="heading">Lng: {waypoint.lng?.toFixed(8)}</p>
            <p className="heading">N: {waypoint.x}</p>
            <p className="heading">E: {waypoint.y}</p>
          </div>
          <div className="flag-icon color_red"
            onClick={() => {
              index == 0 ? playOther('leftBay') : playOther('rightBay')
              setTimeout(() => {
                playColor(waypoint.color?.trim());
              }, 1000);
            }}>
            <FontAwesomeIcon icon={faFlag} color={waypoint.color}/>
          </div>
          <p className="heading has-text-centered">{waypoint.color}</p>
          <p className="title is-3 has-text-centered mt-3 mb-4"> {waypoint.distance?.toFixed(1)} ft </p>
          <div className="is-flex is-flex-centered">
            <button 
              onClick={handlePilePlacement}
              className="button is-outlined is-success">
                Place
            </button>
          </div>
        </>
      }

    </div>      
  )
}

export default NextPile