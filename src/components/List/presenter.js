import React from 'react';
import {fetchData} from '../../actions';
import {Loading} from '../Loading';

class List extends React.Component{
	constructor(props){
		super(props);
		this.onScroll = this.onScroll.bind(this);
	}
	componentDidMount(){
		this.props.getData(0);
		window.addEventListener('scroll', this.onScroll, false);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}
	onScroll() {
		const {offset} = this.props.list;
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
			if(this.needToFetch() && this.canFetch()){
				this.props.getData(offset);
			}
		}
	}

	needToFetch(){
		const {total, list, offset} = this.props.list;
		if(total === list.length){
			return false;
		}
		if(list.length<12){
			return false;
		}
		if(offset > total){
			return false;
		}
		return true;
	}
	canFetch(){
		const {loading} = this.props.list;
		if(loading){
			return false;
		}
		return true;
	}
	render(){
		const { list, loading, err, limit, offset } = this.props.list;
		if(err){
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
								<span className="rig-overlay"></span>
								<span className="rig-text">{item.user}</span>
							</a>
						</li>);
					})
					}
				</ul>
				<Loading isLoading={loading} />
			</div>
		);
	}
}
export default List;
