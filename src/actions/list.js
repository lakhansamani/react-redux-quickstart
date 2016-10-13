import * as actionTypes from '../constants/actionType';
import {getList, addItem} from '../api/ListApi';

function fetchData (offset){
	return {
		type:actionTypes.FETCH_DATA,
		payload: getList(offset)
	};
}
function fetchDataSuccess(data){
	if(!data){data:{}}
	return{
		type: actionTypes.FETCH_DATA_SUCCESS,
		payload:data
	};
}

function fetchDataFailure(err){
	return{
		type: actionTypes.FETCH_DATA_ERROR,
		payload: err
	};
}
function addRequestInit(data){
	return{
		type:actionTypes.ADD_REQ_INIT,
		payload:addItem(data)
	}
}
function addRequestSucess(data){
	return{
		type:actionTypes.ADD_REQ_SUCCESS,
		payload:data
	}
}
function addRequestFail(err){
	return{
		type:actionTypes.ADD_REQ_ERROR,
		payload:err
	}
}
export {
	fetchData,
	fetchDataSuccess,
	fetchDataFailure,
	addRequestInit,
	addRequestFail,
	addRequestSucess
};
