import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import List from './components/List';
import App from './components/App';
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
					<IndexRoute component = {List} />
					<Route path="/" component={List} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
