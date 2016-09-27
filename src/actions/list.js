import * as actionTypes from '../constants/actionType';
import getList from './ListApi.js';

export function fetchData (offset){
	return {
		type:actionTypes.FETCH_DATA,
		payload: getList(offset)
	};
}
export function fetchDataSuccess(data){
	return{
		type: actionTypes.FETCH_DATA_SUCCESS,
		payload:data
	};
}

export function fetchDataFailure(err){
	return{
		type: actionTypes.FETCH_DATA_ERROR,
		payload: err
	};
}
