import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './presenter';
import {loginRequest, loginSuccess, loginFailure} from '../../actions';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
const mapDispatchToProps = (dispatch) =>{
	return{
		loginRequest : (data)=>{
			let req = dispatch(loginRequest(data));
			req.payload.then(response =>{
				if(response.status){
					cookie.save('authData',JSON.stringify(response.response));
					dispatch(loginSuccess(response.response));
					browserHistory.push('/');
				}
				else{
					console.log(response);
					dispatch(loginFailure(response));
				}
			}, err=>{
				dispatch(loginFailure(JSON.stringify(err)));
			});
		}
	};
};
export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
