import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Countrie from './pages/Countrie';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Countrie} />
    </Switch>
  );
}
