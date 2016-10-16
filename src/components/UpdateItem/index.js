import React, {Component} from 'react';
import ItemForm from '../ItemForm';
import {getItem} from '../../api/ListApi';
import {Loading} from '../Loading';
class UpdateItem extends Component{
    constructor(props){
        super(props);
        this.state={itemId:this.props.params.id,data:{},isLoading:true};
    }
    componentDidMount(){
        this.getItemData();
    }
    getItemData(){
        getItem(this.state.itemId)
        .then(data=>{
            if(data.status){
                console.log(data);
                this.setState({data:data.response});
            }
            else{
                console.log(data.err);
            }
            this.setState({isLoading:false});
        },err=>{
            this.setState({isLoading:false});
            console.log(err);
        });
    }
    render(){
        if(this.state.isLoading){
            return <Loading isLoading={this.state.isLoading}/>;
        }
        else{
            return (
                <div>
                    <ItemForm data={this.state.data} action='update'/>
                </div>
            );
        }

    }
}
export default UpdateItem;
