import * as actionTypes from '../constants/actionType';
import {checkLogin, getLoginData} from '../utils/authservice';
const initialState = {auth:{isLoggedIn:checkLogin(),authData:getLoginData(),isLoading:false,err:null}};

export default function(state=initialState,action){
    switch(action.type){
        case actionTypes.CHECK_AUTH:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData()},isLoggedIn:false,err:null};
        case actionTypes.LOGIN_REQUEST:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData(),isLoading:true,err:null}};
        case actionTypes.LOGIN_SUCCESS:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData(),isLoading:false,err:null}};
        case actionTypes.LOGIN_ERR:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData(),isLoading:false,err:action.payload.err}};
        case actionTypes.LOGOUT:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData(),isLoading:false,err:null}};
    }
    return state;
}
