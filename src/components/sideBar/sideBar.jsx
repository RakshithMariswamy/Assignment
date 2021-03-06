import React, { Component } from 'react';
import './sideBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectedItemList from '../SelectedItemList/selectedItemList';
import RadioButton from '../radioButton/radioButton';
import InputField from '../inputField/inputField';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OrderDetails from '../../stateLesComponents/orderDetails/orderDetails';

class SideBar extends Component {
  
  constructor(props) {
    super(props);
    this.selectedPaymentType = this.selectedPaymentType.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      slectedRadio : 'Cash',
      cname:'',
      cphoneNo:'',
      date: new Date().toLocaleString()
    }
    
}


  getTotalAmount(){
   const { selectedToBuy } = this.props;
   let totalAmount = 0;
      selectedToBuy.map((chartItem)=>{
        totalAmount+=(chartItem.product_Quantity * chartItem.product_price)
      })
   return totalAmount.toLocaleString('en');
  }

  handleInputChange(name , value){
    this.setState({ [name] : value });
  }

  selectedPaymentType(selectedValue){
    this.setState({slectedRadio : selectedValue});
  }

  generateBill(){
    
const input = document.getElementById('printable-area');
console.log(input);
html2canvas(input)
  .then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    console.log(canvas);
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save(`${this.state.cname}.pdf`);  
  });
;

                     // alert("generating bill+++++++"+orderDetials);

  }

getOrderInfo(){
  const orderDetials={cashMode:this.state.slectedRadio,
    customerName:this.state.cname,
    cutomerMobileNumber: this.state.cphoneNo,
    gstNo: 'XXXX XXXX XX',
    date: this.state.date,
    orderId: 10006549,
    paidBy: this.state.slectedRadio
  }
 return orderDetials;
}

    render() { 
        const {openCloseBar, selectedToBuy} = this.props;
        return (  <div className="">
                   { openCloseBar ?
                    <div className="total-amount-display"> 
                     <nav id="sidebar">
                      <div id="printable-area">
                         <div className="sidebar-header">
                            <h3>Order Details</h3>
                          </div>
                         <div className="total-amount-display">
                          <OrderDetails ordersInfo={this.getOrderInfo()}/>
                          <SelectedItemList selectedToBuy={selectedToBuy}/>
                          <div className="total-amount-display">
                            <h1>Total: <span>{this.getTotalAmount()}</span></h1>
                          </div>
                        </div>
                        </div>
                        <div className="total-amount-display">
                          <div className="radio-buttons">
                           <RadioButton radioName="Cash" displayName="Cash" paymentType={this.selectedPaymentType} selected={this.state.slectedRadio}/>
                           <RadioButton radioName="Card" displayName="Card" paymentType={this.selectedPaymentType} selected={this.state.slectedRadio}/>
                          </div>
                          <div className="customer-details">
                            <InputField displayName="Customer Name" inputType="text" inputHolder="Enter Customer Name" inputName="cname" handleChange={this.handleInputChange.bind()} valueChanged={this.state.cname} />
                            <InputField displayName="Customer Phone Number" inputType="text" inputHolder="Enter Customer Phone Number" inputName="cphoneNo" handleChange={this.handleInputChange.bind()} valueChanged={this.state.cphoneNo} />
                          </div>
                        </div>
                     
                     <div className="button-space">
                       <button type="button" className="btn btn-primary btn-size margin-text" >
                         Cancel Order
                       </button>
                       <button type="button" className="btn btn-primary btn-size margin-text" onClick={()=> this.generateBill()}>
                         Generate Bill 
                       </button>
                    </div>
                  </nav>
                  </div>
                  :
                   <div></div>
               }
            </div> );
    }
}
 
SideBar.propTypes = {
  selectedToBuy: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  selectedToBuy : state.credenInfo.selectedToBuy
});

export default connect(mapStateToProps,{})(SideBar);