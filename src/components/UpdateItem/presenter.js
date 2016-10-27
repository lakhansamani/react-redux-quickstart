import React, {Component} from 'react';
import ItemForm from '../ItemForm';
import {getItem} from '../../api/ListApi';
import {Loading} from '../Loading';
class UpdateItem extends Component{
    constructor(props){
        super(props);
        console.log(this.props.list.list.list);
        this.state={itemId:this.props.params.id,data:this.props.list.list.list[this.props.params.id]};
    }
    render(){

        return (
            <div>
                <ItemForm data={this.state.data} action='update'/>
            </div>
        );
       

    }
}
export default UpdateItem;
