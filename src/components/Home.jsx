import UserMap from "./UserMap";
import { useContext, useEffect } from "react";
import { WayPointContext } from "../js/WayPointContext";
// import { playDistance, playColor } from "../js/audio";
import NextPile from "./NextPile";

const Home = () => {
  // const waypoint = useContext(WayPointContext)

  // useEffect(()=>{
  //   playDistance(waypoint.waypoint.distance)
  // },[waypoint])

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <UserMap />
        </div>
        <div className="column is-one-fifth">
          <NextPile index={0} />
        </div>
        <div className="column is-one-fifth">
          <NextPile index={1} />
        </div>
      </div>
    </div>
  );
};

export default Home;