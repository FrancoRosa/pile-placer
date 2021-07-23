import { Switch, Redirect, Route } from 'react-router-dom';

import Config from './Config';
import Home from './Home';
import Tabs from './Tabs';
import NavDebug from './NavDebug';

const App = () => {
  return (
    <div className="container">
      <Tabs />
      <Switch>
        <Redirect exact from="/" to="/map" />
        <Route path="/config" component={Config} />
        <Route path="/map" component={Home} />
        <Route path="/debug" component={NavDebug} />
      </Switch>
    </div>
  );
}

export default App;
