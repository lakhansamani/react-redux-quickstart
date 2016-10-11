import * as actionTypes from '../constants/actionType';
import {verifyToken,postLoginData} from '../api/LoginApi';
function checkAuth(token){
    return{
        type:actionTypes.CHECK_AUTH,
        payload:verifyToken(token)
    };
}
function loginRequest(data){
    return{
        type:actionTypes.LOGIN_REQUEST,
        payload:postLoginData(data)
    };
}
function loginSuccess(data){
    return{
        type:actionTypes.LOGIN_SUCCESS,
        payload:data
    };
}
function loginFailure(err){
    return{
        type:actionTypes.LOGIN_ERR,
        payload:err
    };
}
function logoutAction(){
    return{
        type:actionTypes.LOGOUT,
        payload:null
    };
}
export{
    checkAuth,
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutAction
};
