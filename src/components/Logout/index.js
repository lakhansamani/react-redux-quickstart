import React from 'react';
import {connect} from 'react-redux';
import Logout from './presenter';
import {logoutAction} from '../../actions';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie'
const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
const mapDispatchToProps =(dispatch) =>{
	return{
		logout:()=>{
			cookie.remove('authData');
			dispatch(logoutAction());
			browserHistory.push('/');
		}
	};
};
export default connect(mapStateProps,mapDispatchToProps)(Logout);
