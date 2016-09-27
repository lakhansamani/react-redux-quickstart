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
		getData:(offset)=>{
			let req = dispatch(fetchData(offset));
			req.payload.then((response)=>{
				if(response.status){
					dispatch(fetchDataSuccess(response.response));
				}
				else{
					dispatch(fetchDataFailure(JSON.stringify(response.err)));
				}
			},(err)=>{
				dispatch(fetchDataFailure(err.message));
			});
		}
	};
};
export default connect(mapStateProps,mapDispatchToProps)(List);
