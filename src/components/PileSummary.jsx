import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { sortByColor, sortByColorPlaced } from "../js/helpers";

const PileSummary = () => {
  const waypoints = useStoreState( state => state.waypoints)
  const [pileColors, setPileColors] = useState(sortByColor(waypoints))
  const [pilesPlaced, setPilesPlaced] = useState(sortByColorPlaced(waypoints))
  
  useEffect(() => {
    setPileColors(sortByColor(waypoints))
    setPilesPlaced(sortByColorPlaced(waypoints))
  },[waypoints])

  return (
    <>
      <div className="columns">
        <div className="column is-flex is-flex-direction-column is-flex-centered">
          <p className="heading has-text-centered has-text-link title is-5 m-0 p-0">
            Placed
          </p>
          <p className="heading has-text-centered has-text-success title is-3 m-0 p-0">
           {waypoints.filter(x => x.placed).length} / {waypoints.length}
          </p>
        </div>
        {Object.keys(pileColors).map((color) => (
          <div className="column has-text-centered">
            <p>{pilesPlaced[color] ? pilesPlaced[color] : 0} / {pileColors[color]}</p>
            <FontAwesomeIcon icon={faFlag} color={color} style={{fontSize: '2.5em'}}/>
            <p>{(100*(pilesPlaced[color] ? pilesPlaced[color] : 0) / pileColors[color]).toFixed()} %</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PileSummary;