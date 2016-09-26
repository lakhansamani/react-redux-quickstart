import * as actionTypes from '../constants/actionType';

const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_LIST:
			return setList(state, action);
	}
	return state;
}

function setList(state, action) {
	const { list } = action;
	return [ ...state, ...list ];
}
