import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Main from '../components/Main';

export default () => (
  <Switch>
    <Route path="/main" exact component={Main} />
    <Redirect from="*" to="/main" />
  </Switch>
);
