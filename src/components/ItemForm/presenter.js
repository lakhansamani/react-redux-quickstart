import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';

class ItemForm extends Component{
    constructor(props){
        super(props);
        this.state = {title:'',url:'',errorTitle:'',errorUrl:''};
    }
    handleUrlChange(e){
        this.setState({url:e.target.value,errorUrl:''});
    }
    handleTitleChange(e){
        this.setState({title:e.target.value,errorTitle:''});
    }
    getValidationStateTitle(){
        let length = this.state.title.length;
        if(length >0){
            return 'success';
        }
    }
    getValidationStateUrl(){
        const length = this.state.url.length;
        if (length > 0) return 'success';
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        const isLoading = false;
        const err = "";
        return(
            <div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4">
                    <br/>
                        <h3> Add new item </h3>
                        <div className="appCard">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup validationState={this.getValidationStateTitle()} controlId="title">
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" value={this.state.title} placeholder="Enter title for item" onChange={this.handleTitleChange.bind(this)}/>
                            <span className="text-danger">{this.state.errorTitle}</span>
                            </FormGroup>

                            <FormGroup validationState={this.getValidationStateUrl()} controlId="url">
                            <ControlLabel>Image URL</ControlLabel>
                            <FormControl type="url" value={this.state.url} placeholder="Enter url for image" onChange={this.handleUrlChange.bind(this)}
                            />
                            <span className="text-danger">{this.state.errorUrl}</span>
                            </FormGroup>
                            <Button type="submit" className="appBtn" block disabled={isLoading}>{isLoading ? 'Procession request...' : 'Add Item'}</Button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemForm;
