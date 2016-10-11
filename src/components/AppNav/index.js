import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import  {Navbar, Nav, NavItem, FormGroup, FormControl} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';
class AppNav extends Component{
  render(){
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Sample Application</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem eventKey={1} href="#">Login</NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNav;
