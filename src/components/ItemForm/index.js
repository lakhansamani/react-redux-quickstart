import React from 'react';
import {connect} from 'react-redux';
import ItemForm from './presenter';

const mapStateProps = (state)=>{
    const propData = state;
    return{
        propData
    };
};
export default connect(mapStateProps)(ItemForm);
