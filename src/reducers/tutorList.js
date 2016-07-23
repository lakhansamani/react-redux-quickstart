import * as actionTypes from '../constants/actionType';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TUTOR:
      return setTutorList(state, action);
  }
  return state;
}

function setTutorList(state, action) {
  const { tutorList } = action;
  return [ ...state, ...tutorList ];
}