import * as actionTypes from '../constants/actionType';
import getList from './ListApi.js';
export function setList(list){
	return {
		type:'SET_LIST',
		list
	};
}
export function fetchData (){
	return function(dispatch){
		getList().then(function(data){
			dispatch(setList(data));
		});
	};
}
