import * as api from '../constants/ApiConstants';
const getList = () => {
    return fetch(api.getList,{method:'get'})
    .then((res)=>res.json());
};
export default getList;
