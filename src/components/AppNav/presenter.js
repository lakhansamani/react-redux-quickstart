import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import  {Navbar, Nav, NavItem, FormGroup, FormControl} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';
class AppNav extends Component{
  constructor(props){
    super(props);
    this.state = {navExpanded:false};
  }
  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }
  closeNav() {
    this.setState({ navExpanded: false });
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
      <Navbar fixedTop onToggle={this.setNavExpanded.bind(this)} expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Sample Application</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onSelect={this.closeNav.bind(this)}>
            <LinkContainer to={authLink}>
              <NavItem eventKey={1} href="#">{this.props.auth.isLoggedIn?'Logout':'Login'}</NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" className="input-sm nav-search"/>
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNav;
