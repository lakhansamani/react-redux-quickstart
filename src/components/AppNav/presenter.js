import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import  {Navbar, Nav, NavItem, FormGroup, FormControl} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';
import {AppBar, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
class AppNav extends Component{
  constructor(props){
    super(props);
    this.state = {navExpanded:false};
  }
  componentDidMount(){
    if(this.props.auth.isLoggedIn){
      this.props.verifyToken();
    }
  }
  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }
  closeNav() {
    this.setState({ navExpanded: false });
  }
  handleTouchTap(){
    console.log("menu clicked");
  }
  render(){
    let authLink = '';
    if(this.props.auth.isLoggedIn){
      authLink='/logout';
    }
    else{
      authLink='/login';
    }
    return(
      <AppBar
        title={<span>Sample Application</span>}
        onTitleTouchTap={this.handleTouchTap.bind(this)}
        iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
      />
    );
  }
}
export default AppNav;
