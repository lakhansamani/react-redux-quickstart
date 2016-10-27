import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import App from './components/App';
import Logout from './components/Logout';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { requireAuth } from './utils/authservice';
require('./assets/styles/index.scss');

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
		<Provider store = {store}>
			<Router history={history}>
				<Route path = "/" component = {App}>
				<IndexRoute component = {Home} />
					<Route path="login" component={LoginForm} />
					<Route  onEnter = {requireAuth}>
						<IndexRoute component = {Home} />
						<Route path="logout" component={Logout} />
						<Route path="addItem" component={AddItem} />
						<Route path="updateItem/:id" component={UpdateItem} />
					</Route>
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
