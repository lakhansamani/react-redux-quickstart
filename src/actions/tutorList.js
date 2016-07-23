import * as actionTypes from '../constants/actionType';
export function setTutorList(tutorList){
	return {
		type:'SET_TUTOR',
		tutorList
	};
};