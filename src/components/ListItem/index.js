import React, {Component} from 'react';

export default class ListItem extends Component{
    render(){
        return (
            <li>
                <a className="rig-cell">
                    <img className="rig-img" src={this.props.previewURL} />
                    <span className="rig-overlay"></span>
                    <span className="rig-text">{this.props.user}</span>
                </a>
            </li>
        );
    }
}
