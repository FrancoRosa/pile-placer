import { faFlag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStoreState } from "easy-peasy"
import { playColor } from "../js/audio"

const NextPile = ({index}) => {
  const nextPiles = useStoreState(state => state.nextPiles)
  const waypoint = nextPiles[index]

  return (
    <div className="column is-one-fifth">
      <p className="title is-5 has-text-centered mt-4"> Next pile: </p>
      
      {waypoint &&
        
        <>
          <div className="is-flex is-flex-direction-column is-align-content-center mb-4">
            <p>Lat: {waypoint.lat?.toFixed(8)}</p>
            <p>Lng: {waypoint.lng?.toFixed(8)}</p>
            <p>x: {waypoint.x}</p>
            <p>y: {waypoint.y}</p>
            <p>Color: {waypoint.color}</p>
          </div>
          <div className="flag-icon color_red" 
            onClick={() => playColor(waypoint.color)}>
            <FontAwesomeIcon icon={faFlag} color={waypoint.color}/>
          </div>
          <p className="title is-3 has-text-centered mt-3 mb-4"> {waypoint.distance?.toFixed(1)} ft </p>
        </>
      }

    </div>      
  )
}

export default NextPile