import * as api from '../constants/ApiConstants';
import fetch from 'isomorphic-fetch';
const getList = (offset) => {
    return fetch(api.getList+"?offset="+offset,{method:'get'})
    .then((res)=>res.json(),(err)=>err);
};
export default getList;
