import * as actionTypes from '../constants/actionType';
import getList from './ListApi.js';

export function fetchData (){
	return {
		type:actionTypes.FETCH_DATA,
		payload: getList()
	};
}
export function fetchDataSuccess(list){
	return{
		type: actionTypes.FETCH_DATA_SUCCESS,
		payload:list
	}
}

export function fetchDataFailure(err){
	return{
		type: actionTypes.FETCH_DATA_ERROR,
		payload: err
	}
}
