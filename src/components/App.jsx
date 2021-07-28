import { Switch, Redirect, Route } from 'react-router-dom';
import { WayPointContext } from '../js/WayPointContext';
import Config from './Config';
import Home from './Home';
import Tabs from './Tabs';
import NavDebug from './NavDebug';
import { useState } from 'react';

const App = () => {
  const [waypoint, setWaypoint] = useState({})
  return (
    <div className="container">
      <Tabs />
      <Switch>
        <Redirect exact from="/" to="/map" />
        <Route path="/config" component={Config} />
        <WayPointContext.Provider value={{waypoint, setWaypoint}}>
          <Route path="/map" component={Home} />
        </WayPointContext.Provider>
        <Route path="/debug" component={NavDebug} />
      </Switch>
    </div>
  );
}

export default App;
