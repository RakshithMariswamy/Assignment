import React from 'react';

export default function OrderDetails(props) {
    const { ordersInfo } = props;
    return (
        <div className="flex-wrapper orderDetails-main">
          <div className="orderdetails-info"><label>Order Id:</label> <span>{ordersInfo.orderId}</span></div>
          <div className="orderdetails-info"><label>GST Number :</label> <span>{ordersInfo.gstNo}</span></div>
          <div className="orderdetails-info"><label>Customer Name:</label> <span>{ordersInfo.customerName}</span></div>
          <div className="orderdetails-info"><label>Customer Mobile No.:</label> <span>{ordersInfo.cutomerMobileNumber}</span></div>
          <div className="orderdetails-info"><label>Paid By :</label> <span>{ordersInfo.paidBy}</span></div>
          <div className="orderdetails-info"><label>Date - Time :</label> <span>{ordersInfo.date}</span></div>
       </div>
    );
  }
 