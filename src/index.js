import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import TutorList from './components/TutorList';
import App from './components/App';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const tutorList = [
	{name:'Mr Robot'},
	{name:'Mr Jhon'},
	{name: 'Mr X'}
];
const store = configureStore();
store.dispatch(actions.setTutorList(tutorList));
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
		<Provider store = {store}>
			<Router history={history}>
				<Route path = "/" component = {App}>
					<IndexRoute component = {TutorList} />
					<Route path="/" component={TutorList} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	);