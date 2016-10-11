import React, {Component} from 'react';
import {Loading} from '../Loading';
export default class Logout extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.logout();
    }
    render(){
        return(
            <Loading isLoading={true}/>
        );
    }
}
