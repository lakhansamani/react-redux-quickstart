import React from 'react';
import {connect} from 'react-redux';

function TutorList({tutorList = []}){
	return (
			<div>
				{
					tutorList.map((tutor,key)=>{
						return <div className="tutorListItem" key={key}>{tutor.name}</div>;
					})
				}
			</div>
		)
}
function mapStateProps(state){
	const tutorList = state.tutorList;
	return{
		tutorList
	}
}
export default connect(mapStateProps)(TutorList);