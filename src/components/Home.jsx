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
        <NextPile index={0} />
        <UserMap />
        <NextPile index={1} />
      </div>
    </div>
  );
};

export default Home;