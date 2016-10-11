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
        type:actionTypes.LOGIN,
        payload:postLoginData(data)
    };
}
export{
    checkAuth
};
