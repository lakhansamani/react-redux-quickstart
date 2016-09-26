import React from 'react';
import {connect} from 'react-redux';
import List from './presenter';
function mapStateProps(state){
	const list = state.list;
	return{
		list
	};
}
export default connect(mapStateProps)(List);
