import * as actionTypes from '../constants/actionType';
import {verifyToken} from '../api/LoginApi';
function checkAuth(token){
    return{
        type:actionTypes.CHECK_AUTH,
        payload:verifyToken(token)
    };
}
