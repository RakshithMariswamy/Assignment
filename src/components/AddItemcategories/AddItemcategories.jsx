import React, { Component } from 'react';
import NavBar from '../navBar/navBar';
import PropTypes from 'prop-types';
import './Addiemcategories.css';
import { productListCall } from '../../actions/credentialActions';
import { connect } from 'react-redux';
import Categories from '../categories/categories';

class AddItemcategories extends Component {
    state = { sideBar : false}
    constructor(props) {
        super(props);
        this.state = {  }
        
    }

    componentDidMount(){
        const {itemId} = this.props.match.params;
        this.props.productListCall(itemId);
     }

     backToDashboard(){
        this.props.history.push('/dashboard');
     }

     overViewOrder(){
        this.setState({sideBar : !this.state.sideBar});
      }

    render() { 
        return (
              <div id="addItemCategories">
               {this.state.sideBar?<div className="overlay"></div>:<div></div>}
                  <NavBar {...this.props} orderInforMation={()=> this.overViewOrder()} orderDetails= {this.state.sideBar}/> 
                  <div className='back-to-lastView' >
                  <button type="button" className ="btn btn-secondary btn-lg btn-color-all" onClick={()=> this.backToDashboard()}> Back </button>
                  </div>
                  <Categories categories = {this.props.productList} {...this.props} />
              </div>   
        );
}
 
}

AddItemcategories.propTypes = {
    selectedItem: PropTypes.object,
    productListCall: PropTypes.func.isRequired,
    productList: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    productList : state.credenInfo.productList
  });

export default connect(mapStateToProps,{productListCall})(AddItemcategories);