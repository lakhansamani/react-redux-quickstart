import * as actionTypes from '../constants/actionType';

const initialState = {list:{list:[],loading:false,err:null}};

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_DATA:
			return {...state,list:{list:[],loading:true,err:null}};
		case actionTypes.FETCH_DATA_SUCCESS:
			return {...state,list:{list:action.payload,loading:false,err:null}};
		case actionTypes.FETCH_DATA_ERROR:
			return {...state,list:{list:[],err:action.payload,loading:false}};
	}
	return state;
}
