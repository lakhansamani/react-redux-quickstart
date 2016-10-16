import React, {Component} from 'react';
import {Link} from 'react-router';
export default class ListItem extends Component{
    render(){
        return (
            <li>
                <Link className="rig-cell" to={`/updateItem/${this.props.itemId}`}>
                    <img className="rig-img" src={this.props.url} />
                    <span className="rig-overlay"></span>
                    <span className="rig-text">{this.props.title}</span>
                </Link>
            </li>
        );
    }
}
