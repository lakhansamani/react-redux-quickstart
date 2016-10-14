import * as api from '../constants/ApiConstants';
import {getAccessToken} from '../utils/authservice';
import fetch from 'isomorphic-fetch';
const getList = (offset) => {
    return fetch(api.getList+"?offset="+offset,{method:'get'})
    .then((res)=>res.json(),(err)=>err);
};
const addItem = (data) =>{
  console.log(data);
  return fetch(api.addData,{method:'POST',
  headers: {
      'Content-Type':'application/json',
      'x-access-token':getAccessToken()
  },
  body:JSON.stringify(data)})
  .then(res=>res.json(),err=>err);
};
export {getList,addItem};
