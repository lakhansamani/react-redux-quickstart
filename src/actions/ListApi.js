import * as api from '../constants/ApiConstants';
const getList = (offset) => {
    return fetch(api.getList+"?offset="+offset,{method:'get'})
    .then((res)=>res.json());
};
export default getList;
