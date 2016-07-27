import React from 'react';

class TutorList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				{
					this.props.tutorList.map((tutor,key)=>{
						return <div className="tutorListItem" key={key}>{tutor.name}</div>;
					})
				}
			</div>
		)
	}
}
export default TutorList;