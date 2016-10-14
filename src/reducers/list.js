import * as actionTypes from '../constants/actionType';

const initialState = {list:{list:[],loading:false,err:null,limit:12,offset:0,total:0}};

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_DATA:
			return {...state,list:{list:[...state.list.list],loading:true,err:null,limit:12,offset:state.list.offset,total:state.list.offset}};
		case actionTypes.FETCH_DATA_SUCCESS:
			return {...state,list:{list:[...state.list.list,...action.payload.docs],loading:false,err:null,limit:parseInt(action.payload.limit),offset:12+parseInt(action.payload.offset),total:action.payload.total}};
		case actionTypes.FETCH_DATA_ERROR:
			return {...state,list:{list:[],err:action.payload,loading:false,limit:12,offset:0,total:0}};
		case actionTypes.ADD_REQ_INIT:
			return {...state,list:{list:[...state.list.list],loading:true,err:null,limit:12,offset:0,total:0}}
		case actionTypes.ADD_REQ_SUCCESS:
			console.log(state);
			console.log(state.list.total);
			return {...state,list:{list:[],loading:false,err:null,limit:12,offset:0,total:0}}
		case actionTypes.ADD_REQ_ERROR:
			return {...state,list:{list:[...state.list.list],loading:false,err:null,limit:12,offset:0,total:0}};
	}
	return state;
}
