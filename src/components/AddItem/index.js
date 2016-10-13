import React, {Component} from 'react';
import ItemForm from '../ItemForm';

class AddItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = {
          title:'',
          url:''
        };
        return (
            <div>
                <ItemForm data={data} />
            </div>
        );
    }
}
export default AddItem;
