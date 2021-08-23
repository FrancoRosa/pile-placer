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
        <div className="column">
          <p className="heading has-text-centered has-text-link title is-5">
            Piles: {waypoints.length}
          </p>
          <p className="heading has-text-centered has-text-link title is-5">
            Placed: {waypoints.filter(x => x.placed).length}
          </p>
        </div>
        {Object.keys(pileColors).map((color) => (
          <div className="column has-text-centered">
            <FontAwesomeIcon icon={faFlag} color={color} /> 
            <p>{pilesPlaced[color] ? pilesPlaced[color] : 0} / {pileColors[color]}</p>
            <p>{(100*(pilesPlaced[color] ? pilesPlaced[color] : 0) / pileColors[color]).toFixed()} %</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PileSummary;