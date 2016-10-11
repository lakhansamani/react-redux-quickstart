import * as actionTypes from '../constants/actionType';
import getList from '../api/ListApi';

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
export {
	fetchData,
	fetchDataSuccess,
	fetchDataFailure
};
