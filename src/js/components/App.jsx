import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default () => (
  <Switch>
    <Route exact path="/" component={Page1} />
    <Route path="/Page2" component={Page2} />
    <Route path="/Page3" component={Page3} />
  </Switch>
);
