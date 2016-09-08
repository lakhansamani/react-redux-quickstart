import * as api from '../constants/ApiConstants';
const getTutors = () => {
    return fetch(api.tutorList,{method:'get'})
    .then((res)=>res.json());
};
export default getTutors;
