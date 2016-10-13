import React, {Component} from 'react';
import ItemForm from '../ItemForm';

class AddItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ItemForm />
            </div>
        );
    }
}
export default AddItem;
