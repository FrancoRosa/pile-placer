import UserMap from "./UserMap";
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from "react";
import { WayPointContext } from "../js/WayPointContext";

const Home = () => {
  const waypoint = useContext(WayPointContext)

  useEffect(()=>{
    console.log(waypoint.waypoint.distance)
  },[waypoint])

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <UserMap />
        </div>
        <div className="column is-one-fifth">
          <p className="title is-5 has-text-centered mt-4"> Next pile: </p>
          <div className="is-flex is-flex-direction-column is-align-content-center mb-4">
            <p>Lat: {waypoint.waypoint.lat?.toFixed(8)}</p>
            <p>Lng: {waypoint.waypoint.lng?.toFixed(8)}</p>
            <p>x: {waypoint.waypoint.x}</p>
            <p>y: {waypoint.waypoint.y}</p>
            <p>Color: {waypoint.waypoint.color}</p>
          </div>
          <div className="flag-icon color_red">
            <FontAwesomeIcon icon={faFlag} color={waypoint.waypoint.color}/>
          </div>
          <p className="title is-3 has-text-centered mt-3 mb-4"> {waypoint.waypoint.distance?.toFixed(1)} ft </p>
          <hr />
          <p className="title is-5 has-text-centered"> Landed </p>
          <p className="title is-3 has-text-centered"> 50 </p>
        </div>
      </div>
    </div>
  );
};

export default Home;