import React from 'react';
import {connect} from 'react-redux';
import ItemForm from './presenter';
import {addRequestInit,addRequestSucess,addRequestFail, updateRequestInit, updateRequestSuccess,updateRequestFail} from '../../actions';
import {browserHistory} from 'react-router';
const mapStateProps = (state)=>{
    const list = state.list.list;
    return{
        list
    };
};
const mapDispatchToProps = (dispatch) =>{
  return{
    addData:(data)=>{
        let req = dispatch(addRequestInit(data));
        req.payload.then(res=>{
          if(res.status){
            dispatch(addRequestSucess(res.response));
            browserHistory.push('/');
          }
          else{
            dispatch(addRequestFail(res.err));
          }
        },err=>{
          dispatch(addRequestFail(err));
        });
    },
    updateData: (data,id)=>{
        console.log(id);
        let req = dispatch(updateRequestInit(data,id));
        req.payload.then(res=>{
            if(res.status){
                dispatch(updateRequestSuccess(res.response));
                browserHistory.push('/');
            }
            else{
                dispatch(updateRequestFail(res.err));
            }
        },err=>{
            dispatch(updateRequestFail(err));
        });
    }
    };
};
export default connect(mapStateProps, mapDispatchToProps)(ItemForm);
