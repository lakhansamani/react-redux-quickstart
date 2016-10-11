import * as actionTypes from '../constants/actionType';
import {checkLogin, getLoginData} from '../utils/authservice';
const initialState = {auth:{isLoggedIn:checkLogin(),authData:getLoginData()}};

export default function(state=initialState,action){
    switch(action.type){
        case actionTypes.CHECK_AUTH:
            return {auth:{isLoggedIn:checkLogin(),authData:getLoginData()}};
    }
    return state;
}
