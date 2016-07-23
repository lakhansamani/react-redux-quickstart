import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import TutorList from './components/TutorList';

const tutorList = [
	{name:'Mr Robot'},
	{name:'Mr Jhon'}
];
const store = configureStore();
store.dispatch(actions.setTutorList(tutorList));
ReactDOM.render(
		<TutorList tutorList = {tutorList} />,
		document.getElementById('app')
	);