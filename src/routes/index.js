import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';
import TesteUseCallback from '../pages/TesteUseCallback';

const Routes = () => (
  <Switch>
    <Route path="/" component={Login} exact/>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/tarefas" component={Tarefas} />
    <Route path="/teste-usecallback" component={TesteUseCallback} />
  </Switch>
);

export default Routes;
