import * as api from '../constants/ApiConstants';
import fetch from 'isomorphic-fetch';
let verifyToken = (token) => {
    if(token){
        return fetch(api.verifyToken,{headers:{'x-access-token':token}})
        .then(res=>res.json(),err=>err);
    }
    else{
        return null;
    }
};
export {
    verifyToken
};
