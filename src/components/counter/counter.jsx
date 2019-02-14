import React, { Component } from 'react';
import './counter.css'


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tags: ['tag1','tag2','tag3'] }
    }

    
    getCountInfo = () =>{
        return this.props.count.value === 0 ? 'zero': this.props.count.value;
    }
   

    getBadgesClasses() {
        let badgeClasses = 'badge m-2 badge-';
        badgeClasses += (this.props.count.value === 0) ? 'warning' : 'primary';
        return badgeClasses;
    }

    render() { 
        return ( 
        <React.Fragment >
            <div className="title">{this.props.children}</div>
        < div className="productList">
            <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.count)}>+</button>
            <span className={this.getBadgesClasses()}>{this.getCountInfo()}</span>
            <button className="btn btn-secondary btn-sm" onClick={() => this.props.decrementCount(this.props.count)}>-</button>
            <button onClick={() =>this.props.onDelete(this.props.count)}className="btn btn-danger btn-sm m-2">Delete</button>
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