/* eslint-disable*/
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from '../views/main';


const Routes = (
  <Switch>
    <Redirect exact from="/" to="/example" />
    <Route path="/example" component={Main} />
  </Switch>
);

export default Routes;
