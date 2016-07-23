import React from 'react';

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