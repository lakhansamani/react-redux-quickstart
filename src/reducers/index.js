import { combineReducers } from 'redux';
import tutorList from './tutorList';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	tutorList,
	routing: routerReducer
});