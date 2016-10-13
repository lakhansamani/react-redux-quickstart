import React, {Component} from 'react';

export default class ListItem extends Component{
    render(){
        return (
            <li>
                <a className="rig-cell">
                    <img className="rig-img" src={this.props.url} />
                    <span className="rig-overlay"></span>
                    <span className="rig-text">{this.props.title}</span>
                </a>
            </li>
        );
    }
}
