import { combineReducers } from 'redux';
import list from './list';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	list,
	routing: routerReducer
});
