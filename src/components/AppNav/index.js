import React from 'react';
import {connect} from 'react-redux';
import AppNav from './presenter';
import { browserHistory } from 'react-router';
import {checkAuth,logoutAction} from '../../actions';
import cookie from 'react-cookie';
const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
const mapDispatchToProps = (dispatch)=>{
	return{
		verifyToken:()=>{
			let req=dispatch(checkAuth());
			if(req){
				req.payload.then(res=>{
					console.log(res);
					if(!res.status){
						cookie.remove('authData');
						dispatch(logoutAction());
						browserHistory.push('/');
					}
				},err=>{
					cookie.remove('authData');
					dispatch(logoutAction());
					browserHistory.push('/');
				});
			}
		}
	};
}
export default connect(mapStateProps,mapDispatchToProps)(AppNav);
