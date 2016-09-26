import React from 'react';
import {fetchData} from '../../actions';
class List extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getData();
	}
	render(){
		const { list, loading, err } = this.props.list;
		if(loading){
			return(
				<div><h1>Loading .... </h1></div>
			)
		}
		else if(err){
			return(
				<div><h1>{err}</h1></div>
			)
		}
		return (
			<div>
				{
					list.map((item,key)=>{
						return <div key={key}>{item.name}</div>;
					})
				}
			</div>
		);
	}
}
export default List;
