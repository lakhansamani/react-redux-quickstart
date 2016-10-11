import React from 'react';
import {connect} from 'react-redux';
import AppNav from './presenter';
import {loginRequest, loginSuccess, loginFailure, logoutAction} from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
export default connect(mapStateProps)(AppNav);
