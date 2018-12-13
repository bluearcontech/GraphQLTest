import { Router, Route } from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import Navbar from '../containers/NavbarContainer';
import DashboardPageContainer from '../containers/DashboarPageContainer';
import AddPizzaContainer from '../containers/AddPizzaContainer';

// eslint-disable-next-line
export default store => {
  const history = createBrowserHistory();
  const routes = (
    <Router history={history}>
      <div>
        <Navbar />
        <Route exact path="/" component={DashboardPageContainer} />
        <Route path="/add" component={AddPizzaContainer} />
      </div>
    </Router>
  );

  return routes;
};
