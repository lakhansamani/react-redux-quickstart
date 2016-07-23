import React from 'react';
import {connect} from 'react-redux';
import TutorList from './presenter';
function mapStateProps(state){
	const tutorList = state.tutorList;
	return{
		tutorList
	}
}
export default connect(mapStateProps)(TutorList);