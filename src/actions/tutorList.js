import * as actionTypes from '../constants/actionType';
import getTutors from './TutorApi.js';
export function setTutorList(tutorList){
	return {
		type:'SET_TUTOR',
		tutorList
	};
}
export function fetchData (){
	return function(dispatch){
		getTutors().then(function(data){
			console.log(data);
			dispatch(setTutorList(data));
		});
	};
}
