import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {email:'',password:'',errorUsername:'',errorPassword:''};
    }
    componentDidMount(){
        if(this.props.auth.isLoggedIn){
            browserHistory.push('/');
        }
    }
    handleEmailChange(e){
        this.setState({email:e.target.value,errorUsername:''});
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value,errorPassword:''});
    }
    getValidationStateEmail(){
        let email = this.state.email;
        let length = this.state.email.length;
        if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/)){
            return 'success';
        }
        if(length >0 && !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/)){
            return 'error';
        }
    }
    getValidationStatePassword(){
        const length = this.state.password.length;
        if (length > 0) return 'success';
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.getValidationStateEmail() !== 'success' ||  this.getValidationStatePassword() !== 'success'){
            if(this.getValidationStateEmail() !== 'success'){
                this.setState({errorUsername:'Please enter valid email'});

            }
            if(this.getValidationStatePassword() !== 'success'){
                this.setState({errorPassword:'Please enter valid password'});

            }
        }
        else{
            let data = {
                "username":"abhay.samani@gmail.com",
                "password":this.state.password
            };
            this.props.loginRequest(data);

        }
    }
    render(){
        const {isLoading,err} = this.props.auth;
        return(
            <div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4">
                        <br/>
                        <br/>
                        <div className="panel panel-default">
                            <div className="panel-heading"><h3>Login to access system </h3></div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <FormGroup validationState={this.getValidationStateEmail()} controlId="Username">
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl type="email" value={this.state.email} placeholder="Enter your email" onChange={this.handleEmailChange.bind(this)}/>
                                    <span className="text-danger">{this.state.errorUsername}</span>
                                    </FormGroup>

                                    <FormGroup validationState={this.getValidationStatePassword()} controlId="password">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password" value={this.state.password} placeholder="Enter your password" onChange={this.handlePasswordChange.bind(this)}
                                    />
                                    <span className="text-danger">{this.state.errorPassword}</span>
                                    </FormGroup>
                                    <Button type="submit" className="appBtn" block disabled={isLoading}>{isLoading ? 'Procession request...' : 'Login'}</Button>
                                </form>

                            </div>
                        </div>
                        <h5 className="text-danger">{err? err :''}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
