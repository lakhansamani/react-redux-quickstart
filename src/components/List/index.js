import React from 'react';
import ListItem from '../ListItem';
class List extends React.Component{
	render(){
		return (
			<div>
				<ul id="rig">
					{this.props.list.map((item,key)=>{
						return <ListItem key={key} url={item.url} title={item.title} itemId = {key} />;
					})
					}
				</ul>
			</div>
		);
	}
}
export {List};
