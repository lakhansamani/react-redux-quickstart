import React from 'react';
import {connect} from 'react-redux';
import List from './presenter';
import {fetchData, fetchDataSuccess, fetchDataFailure} from '../../actions/';
const mapStateProps = (state) => {
	const list = state.list.list;
	return{
		list
	};
};
const mapDispatchToProps = (dispatch) => {
	return{
		getData:()=>{
			let req = dispatch(fetchData());
			req.payload.then((response)=>{
				dispatch(fetchDataSuccess(response));
			},(err)=>{
				dispatch(fetchDataFailure(err.message));
			});
		}
	};
};
export default connect(mapStateProps,mapDispatchToProps)(List);
