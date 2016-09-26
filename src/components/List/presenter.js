import React from 'react';
import {fetchData} from '../../actions';
class List extends React.Component{
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
					this.props.list.map((item,key)=>{
						return <div key={key}>{item.name}</div>;
					})
				}
			</div>
		);
	}
}
export default List;
