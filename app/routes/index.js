import { Router, Route, IndexRoute, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history';
import createStore from '../store'
import App from '../components/App';
import Navbar from '../containers/NavbarContainer';
import DashboardPageContainer from '../containers/DashboarPageContainer';
import AddPizzaContainer from '../containers/AddPizzaContainer';
export default (store) => {
	const history = createBrowserHistory();
	const routes =
		<Router history={history}>
			<div>
				<Navbar />
				<Route exact path="/" component={DashboardPageContainer} />
				<Route path="/add" component={AddPizzaContainer} />
			</div>
		</Router>

	return routes
}