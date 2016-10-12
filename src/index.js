import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import App from './components/App';
import Logout from './components/Logout';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { requireAuth } from './utils/authservice';
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
					<Route  onEnter = {requireAuth}>
						<Route path="/logout" component={Logout} />
					</Route>
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
