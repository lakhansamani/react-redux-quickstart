import * as actionTypes from '../constants/actionType';

const initialState = {list:{list:[],loading:false,err:null,limit:10,offset:0}};

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_DATA:
			return {...state,list:{list:[],loading:true,err:null,limit:10,offset:0}};
		case actionTypes.FETCH_DATA_SUCCESS:
			return {...state,list:{list:action.payload.docs,loading:false,err:null,limit:10,offset:10+action.payload.offset}};
		case actionTypes.FETCH_DATA_ERROR:
			return {...state,list:{list:[],err:action.payload,loading:false,limit:10,offset:0}};
	}
	return state;
}
