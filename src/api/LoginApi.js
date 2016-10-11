import * as api from '../constants/ApiConstants';
import fetch from 'isomorphic-fetch';
let verifyToken = (token) => {
    if(token){
        return fetch(api.verifyToken,{method:'get',headers:{'x-access-token':token}})
        .then(res=>res.json(),err=>err);
    }
    else{
        return null;
    }
};
let postLoginData = (data) =>{
    return fetch(api.login,{method:'POST',body:data})
    .then(res=>res.json(),err=>err);
};
export {
    verifyToken
};
