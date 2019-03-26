import React, { Component } from 'react';
import Counter from '../counter/counter';
import { selectedItemForBuy } from '../../actions/credentialActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class  CounterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter :this.props.selectedCategories
        }
    }

 
    handleIncrement = (selectedItem) => {
        let selectItemInfo = selectedItem;
        selectItemInfo.product_Quantity = selectItemInfo.product_Quantity +1;
        this.props.selectedItemForBuy(this.props.selectedToBuy,selectItemInfo);
      this.setState({counter : selectItemInfo});
    }
       
    handleDecrement =(selectedItem) =>{
        if(selectedItem.product_Quantity > 0){
          let selectItemInfo = selectedItem;
          selectItemInfo.product_Quantity = selectItemInfo.product_Quantity - 1;
          this.props.selectedItemForBuy(this.props.selectedToBuy,selectItemInfo);
          this.setState({counter : selectItemInfo});
        }
    }
       
    filterArray(selectedItem) {
      return this.state.counter.filter((count)=> count.id !== selectedItem.id);
    }
    
    render() { 
         
        const {counter } = this.state;
        return ( <React.Fragment>
           <Counter key={counter.id} count={counter} userImage  onIncrement={this.handleIncrement} decrementCount ={this.handleDecrement}>
           </Counter>
        </React.Fragment> );
    }
}
 
CounterList.propTypes = {
  selectedCategories: PropTypes.object,
  selectedItemForBuy: PropTypes.func.isRequired,
  selectedToBuy: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  selectedToBuy : state.credenInfo.selectedToBuy
});

export default connect(mapStateToProps,{selectedItemForBuy})(CounterList);