import React, { Component } from 'react';
import './Login.css';
import userImage from '../../image/download.png';
//import {withRouter} from 'react-router-dom';
import { credentials } from '../../actions/credentialActions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class Login extends Component {
     state ={
         userName : '',
         password :'',
       //  toDashBoard: false,
         showLogin : false,
         loginInfo : [{userName : 'rakshith',password :'1234'},{userName : 'vinay',password :'12345'}]
     }

     componentDidMount(){
        this.props.credentials();
     }

    verifyCredential(){
        const {userName , password} = this.state;
        const { credInfo } = this.props;
        const checkUser = credInfo.some((credInfo)=> {
            return (credInfo.userName === userName && credInfo.password === password);
        });
        if(checkUser){
          localStorage.setItem('userInfo',{userName:userName,password:password});
          this.props.history.push('/dashboard');
        }else{
          alert('Invalied credentials');
        } 
    }

    componentWillMount(){
       if(localStorage.getItem('userInfo') !== null) {
        this.props.history.push('/dashboard');
       }
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    render() { 
        console.log(this.props)
        return ( 
            <React.Fragment>
           <div>
                <div className="imgcontainer">
                 <img src={userImage} alt="Avatar" className="avatar"/>
                </div>
                <div className="container-login">
                  <form onSubmit={()=> this.verifyCredential()}>              
                     <label htmlFor="uname"><b>Username</b></label>
                     <input type="text" placeholder="Enter Username" name="userName"  onChange={(e)=> this.handleChange(e) } value={this.state.userName} required/>
                     
                     <label htmlFor="psw"><b>Password</b></label>
                     <input type="password" placeholder="Enter Password" name="password" onChange={(e)=> this.handleChange(e)} value={this.state.password}  required/>
                     
                     <button type="submit" >Login</button>               
                  </form>
                </div>
                </div>

            </React.Fragment>
         );
    }
}

Login.propTypes = {
    credentials: PropTypes.func.isRequired,
    credInfo: PropTypes.array.isRequired
}
 
const mapStateToProps = state => ({
    credInfo: state.credenInfo.credential
});

export default connect(mapStateToProps,{credentials})(Login);

/**
 * Redirect ,
 * if(this.state.toDashBoard){
          return( <div><Redirect to="/dashboard" /></div>)
        }
 */