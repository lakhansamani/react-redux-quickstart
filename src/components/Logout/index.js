import React from 'react';
import {connect} from 'react-redux';
import Logout from './presenter';
import {logoutAction} from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
const mapDispatchToProps =(dispatch) =>{
	return{
		logout:()=>{
			localStorage.removeItem('authData');
			dispatch(logoutAction());
			browserHistory.push('/');
		}
	};
};
export default connect(mapStateProps,mapDispatchToProps)(Logout);
