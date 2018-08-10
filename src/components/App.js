import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import DashboardPage from './DashboardPage';

const App = () => {
  return (
    <div>
      Hello
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
};

export default App;