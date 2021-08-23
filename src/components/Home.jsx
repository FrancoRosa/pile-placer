import UserMap from "./UserMap";
import NextPile from "./NextPile";
import { useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { playColor, playDistance } from "../js/audio";

const Home = () => {
  const nextPiles = useStoreState(state => state.nextPiles)
  
  useEffect(()=>{
    if(nextPiles[0].distance) {
      let minDistance = Math.min(nextPiles[0].distance, nextPiles[1].distance)
      playDistance(minDistance)
    }
  },[nextPiles])

  return (
    <div className="container">
      <div className="columns p-0 m-0">
        <NextPile index={0} />
        <UserMap />
        <NextPile index={1} />
      </div>
    </div>
  );
};

export default Home;