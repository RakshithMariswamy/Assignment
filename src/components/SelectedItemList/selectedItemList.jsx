import React, { Component } from 'react';

class SelectedItemList extends Component {
    state = {  }
    render() { 
        const {selectedToBuy }= this.props;
        return (   <div className="div-table">
        <div className="div-table-row  div-table-header" >
              <div className="div-table-col">Item</div>
              <div className="div-table-col">Quantity</div>
              <div className="div-table-col">Price</div>
              <div className="div-table-col">Total</div>
          </div>
          {selectedToBuy.map((chart) => 
            chart.product_Quantity != 0 ?
            <div className="div-table-row" key={chart.product_id}>
            <div className="div-table-col">{chart.categories_name}</div>
            <div className="div-table-col">{chart.product_Quantity}</div>
            <div className="div-table-col">{chart.product_price}</div>
            <div className="div-table-col">{chart.product_Quantity * chart.product_price}</div>
            </div> : <div></div>
          )}
     </div> );
    }
}
 
export default SelectedItemList;