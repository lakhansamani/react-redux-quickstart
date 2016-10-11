import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import App from './components/App';
import Logout from './components/logout';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
require('./assets/styles/index.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
		<Provider store = {store}>
			<Router history={history}>
				<Route path = "/" component = {App}>
					<IndexRoute component = {Home} />
					<Route path="/" component={Home} />
					<Route path="/login" component={LoginForm} />
					<Route path="/logout" component={Logout} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
