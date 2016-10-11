import test from 'ava';
import list from '../../src/reducers/list';
import {fetchData,fetchDataSuccess,fetchDataFailure} from '../../src/actions/';

test('fetch data reducer',t =>{
    const prevState = {list:{list:[],loading:false,err:null,limit:12,offset:0,total:0}};
    const nextState = list(prevState,fetchData());
    t.deepEqual(nextState,{list:{list:[],loading:true,err:null,limit:12,offset:0,total:0}});
});
test('fetch data success reducer',t =>{
    const prevState = {list:{list:[],loading:true,err:null,limit:12,offset:12,total:0}};
    const nextState = list(prevState,fetchDataSuccess({"docs":[],"total":40,"limit":12,"offset":0}));
    t.deepEqual(nextState,{list:{list:[],loading:false,err:null,limit:12,offset:12,total:40}});
});
