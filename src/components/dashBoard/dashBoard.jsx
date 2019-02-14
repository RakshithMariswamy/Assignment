import React, { Component } from 'react';
import NavBar from '../navBar/navBar'

class DashBoard extends Component {
    state = {  }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        if(localStorage.getItem('userInfo') == null) {
            this.props.history.push('/');
        }
    }
    render() { 
        return (  
        <React.Fragment>
           <NavBar></NavBar>

        </React.Fragment>);
    }
}
 
export default DashBoard;