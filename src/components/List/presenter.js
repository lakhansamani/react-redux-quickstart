import React from 'react';
import {fetchData} from '../../actions';
class List extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getData(0);
	}
	render(){
		const { list, loading, err, limit, offset } = this.props.list;
		if(loading){
			return(
				<div><h1>Loading .... </h1></div>
			);
		}
		else if(err){
			return(
				<div><h1>{err}</h1></div>
			);
		}
		return (
			<div>
				<ul id="rig">
					{list.map((item,key)=>{
						return (<li key={key}>
							<a className="rig-cell">
								<img className="rig-img" src={item.previewURL} />
							</a>
						</li>);
					})
					}
				</ul>
			</div>
		);
	}
}
export default List;
