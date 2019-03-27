import React, { Component } from 'react';
import NavBar from '../navBar/navBar';
import Categories from '../categories/categories';
import authenticationCheck  from '../../services/authenticationCheck';
import { categoriesListCall } from '../../actions/credentialActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class DashBoard extends Component {
    state = { sideBar : false}
  
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        authenticationCheck();
    }
    componentDidMount(){
        this.props.categoriesListCall();
     }

     overViewOrder(){
        this.setState({sideBar : !this.state.sideBar});
        if(this.state.sideBar){
          document.body.style.overflow = 'auto';
      } else {
          document.body.style.overflow = 'hidden';
      }
      }

    render() { 
        return (  
        <React.Fragment>
            {this.state.sideBar?<div className="overlay"></div>:<div></div>}
           <NavBar {...this.props} orderInforMation={()=> this.overViewOrder()} orderDetails= {this.state.sideBar}/> 
           <Categories categories = {this.props.categoriesInfo} {...this.props} />
        </React.Fragment>);
    }
}
 
Categories.propTypes = {
    categoriesListCall: PropTypes.func.isRequired,
    categoriesInfo: PropTypes.array.isRequired
  }
  
  const mapStateToProps = state => ({
    categoriesInfo : state.credenInfo.categoriesList
  });
  
  export default connect(mapStateToProps,{categoriesListCall})(DashBoard);
