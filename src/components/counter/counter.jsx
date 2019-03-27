import React, { Component } from 'react';
import './counter.css'


class Counter extends Component {
 
    getCountInfo = () =>{
        return this.props.count.product_Quantity === 0 ? 'zero': this.props.count.product_Quantity;
    }
   

    getBadgesClasses() {
        let badgeClasses = 'badge m-2 badge-';
        badgeClasses += (this.props.count.product_Quantity === 0) ? 'warning' : 'primary';
        return badgeClasses;
    }

    render() { 
        return ( 
        <React.Fragment >
            <div className="prize-list">
            <label> Prize: </label><span>{this.props.count.product_price}</span>
            </div>     
        <div className="productList">
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.decrementCount(this.props.count)}>-</button>
            <span className={this.getBadgesClasses()}>{this.getCountInfo()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.count)}>+</button>
        </div> 
        </React.Fragment> );
    }

    
}
 
export default Counter;

 /*<ul>
        {this.state.tags.length > 0 ? this.state.tags.map((tag)=> <li key={tag}>{tag}</li>) : <li>List is empty</li> }
        </ul>*/
/**
 * 
 * 
 * {this.state.brand.map((brandName)=>
            <div className="productList">
            <button>+</button>
            <h1>{brandName}</h1>
            <button>-</button></div>)
            }
 */