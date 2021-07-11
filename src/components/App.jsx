import { Switch, Redirect, Route } from 'react-router-dom';

import Config from './Config';
import Home from './Home';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/config" component={Config} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
