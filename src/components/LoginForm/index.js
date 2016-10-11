import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './presenter';

const mapStateProps = (state) => {
	const auth = state.auth.auth;
	return{
		auth
	};
};
export default connect(mapStateProps)(LoginForm);
