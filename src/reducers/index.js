import { combineReducers } from 'redux';
import list from './list';
import auth from './auth';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	list,
	auth,
	routing: routerReducer
});
