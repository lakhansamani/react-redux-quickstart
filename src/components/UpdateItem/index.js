import React from 'react';
import {connect} from 'react-redux';
import UpdateItem from './presenter';
import {logoutAction} from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps = (state) => {
    const list = state.list;
    return{
        list
    };
};
export default connect(mapStateProps)(UpdateItem);
