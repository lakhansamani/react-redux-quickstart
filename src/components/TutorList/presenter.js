import React from 'react';
import {fetchData} from '../../actions';
class TutorList extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchData());
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
		);
	}
}
export default TutorList;
