import React, { Component } from 'react';
import {  withRouter} from 'react-router-dom';
import myLogo from '../../images/codeMfarmLogo.png';
import './navBar.css';
import SideBar from '../sideBar/sideBar';

class  NavBar extends Component {

  state = { sideBar : false}

    logoutInfo(){
        localStorage.removeItem('userInfo');
        this.props.history.push('/');
    }

    backToDashBoard(){
      this.props.history.push('/dashboard');
    }

    render() { 
        return (  <nav className="navbar navbar-expand-lg navbar-bcg-col">
          <div className="nav-in-opt flex-container">
            
            <img onClick={() => this.backToDashBoard()} src={myLogo} className="nav-logo-img" alt="Logo"></img>
            <div className="flex-stretch"></div>
            <button type="button" className="btn btn-info btn-size" onClick={()=>this.props.orderInforMation()}>
                <span>Order Details</span>
            </button>
            <button type="button" className="btn btn-primary btn-size margin-text">
                  Notifications <span className="badge badge-light">4</span>
            </button>
            <button type="button" className="btn btn-logout-outline  btn-lg btn-size" onClick={() => this.logoutInfo()}>Logout</button>
          </div>
          <SideBar openCloseBar={this.props.orderDetails}/>
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
