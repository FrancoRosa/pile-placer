import { Switch, Redirect, Route } from 'react-router-dom';

import Config from './Config';
import Home from './Home';
import Tabs from './Tabs';

const App = () => {
  return (
    <div className="container">
      <Tabs />
      <Switch>
        <Redirect exact from="/" to="/map" />
        <Route path="/config" component={Config} />
        <Route path="/map" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
