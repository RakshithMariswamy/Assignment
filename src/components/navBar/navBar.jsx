import React, { Component } from 'react';
import {  withRouter} from 'react-router-dom';
import myLogo from '../../image/myLogo.png';
import './navBar.css';

class  NavBar extends Component {
 

    logoutInfo(){
        localStorage.removeItem('userInfo');
        this.props.history.push('/');
    }

    backToDashBoard(){
      this.props.history.push('/dashboard');
    }
    render() { 
        return (  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="nav-in-opt">
            <img onClick={() => this.backToDashBoard()} src={myLogo} className="nav-logo-img co" alt="Logo"></img>
            <button type="button" className="btn btn-outline-success float-right btn-lg btn-size" onClick={() => this.logoutInfo()}>Logout</button>
          </div>
      </nav> );
    }
}
 
export default withRouter(NavBar);

/**
 * 
 * <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="...">
      </a>
      <button type="button" class="btn btn-default navbar-btn" onClick={() => this.logoutInfo()}>Logout</button>
    </div>
  </div>
</nav>


<nav className="navbar navbar-light bg-light">
        <span className="navbar-brand" >Nav Bar </span>
        
        <button type="button" class="btn btn-default navbar-btn" onClick={() => this.logoutInfo()}>Logout</button>
    </nav>

 * 
 */
