import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
class Nav extends Component{
  render(){
    return(
      <div className="appNavbar">
        <span className="appBrand"><img src={logo} alt="logo" className="appLogo" /></span>
      </div>
    )
  }
}
export default Nav
