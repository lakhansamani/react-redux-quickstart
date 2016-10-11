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
    console.log(data);
    return fetch(api.login,{method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)})
    .then(res=>res.json(),err=>err);
};
export {
    verifyToken,
    postLoginData
};
