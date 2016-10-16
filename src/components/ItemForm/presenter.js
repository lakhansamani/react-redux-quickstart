import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';

class ItemForm extends Component{
    constructor(props){
        super(props);
        this.state = {title:this.props.data.title,url:this.props.data.url,errorTitle:'',errorUrl:''};
    }
    handleUrlChange(e){
        this.setState({url:e.target.value,errorUrl:''});
    }
    handleTitleChange(e){
        this.setState({title:e.target.value,errorTitle:''});
    }
    getValidationStateTitle(){
        let length = this.state.title.trim().length;
        if(length >0){
            return 'success';
        }
    }
    getValidationStateUrl(){
        const length = this.state.url.trim().length;
        if (length > 0) return 'success';
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.getValidationStateTitle() !== 'success' ||  this.getValidationStateUrl() !== 'success'){
            if(this.getValidationStateTitle() !== 'success'){
                this.setState({errorTitle:'Please enter valid title'});
            }
            if(this.getValidationStateUrl() !== 'success'){
                this.setState({errorUrl:'Please enter valid url'});
            }
        }
        else{
          if(this.props.action === 'add'){
            let data = {
                "title":this.state.title,
                "url":this.state.url
            };
            this.props.addData(data);
          }
        }
        if(this.props.action === 'update'){
            let data = {
                title:this.state.title,
                url:this.state.url
            };
            this.props.updateData(data,this.props.data._id);
        }
    }
    render(){
        let {isLoading,err} = this.props.list;
        return(
            <div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4">
                      <div className="panel panel-default">
                        <div className="panel-heading"><h3>{this.props.action === 'add' ? 'Add new Item' : 'Update Item'}</h3></div>
                        <div className="panel-body">
                          <form onSubmit={this.handleSubmit.bind(this)}>
                              <FormGroup validationState={this.getValidationStateTitle()} controlId="title">
                              <label>Title</label>
                              <FormControl type="text" value={this.state.title} placeholder="Enter title for item" onChange={this.handleTitleChange.bind(this)}/>
                              <span className="text-danger">{this.state.errorTitle}</span>
                              </FormGroup>

                              <FormGroup validationState={this.getValidationStateUrl()} controlId="url">
                              <label>Image URL</label>
                              <FormControl type="url" value={this.state.url} placeholder="Enter url for image" onChange={this.handleUrlChange.bind(this)}
                              />
                              <span className="text-danger">{this.state.errorUrl}</span>
                              </FormGroup>
                              <Button type="submit" className="appBtn" block disabled={isLoading}>{isLoading ? 'Procession request...' : 'Submit'}</Button>
                          </form>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemForm;
