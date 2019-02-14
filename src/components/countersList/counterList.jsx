import React, { Component } from 'react';
import Counter from '../counter/counter';
import NavBar from '../navBar/navBar'

class  CounterList extends Component {

    state = {
        counter : [
            {id:1,value:0,title:'Food'},
            {id:2,value:1,title:'Cloth'},
            {id:3,value:0,title:'Laptop'},
            {id:4,value:0,title:'Mobile'},
            {id:5,value:0,title:'Bags'}
        ]
    }
    
    componentWillUnmount() {
        console.log(this.props);
    }
    handleDelete = (selectedItem) => {
        this.setState({counter : this.filterArray(selectedItem)})
       }
       
    handleReset = () =>{
         const resetarray = this.state.counter.map((cnt)=> {
             cnt.value = 0;
             return cnt; 
           });
           this.setState({counter : resetarray});
       }
       
       handleIncrement = (selectedItem) => {
           const increment = this.state.counter.map((cnt)=>{
              cnt.value = ((cnt.id === selectedItem.id) ? (cnt.value +1): cnt.value); 
                    return cnt      });
             this.setState({counter : increment});
       }
       
       handleDecrement =(selectedItem) =>{
           const decrement = this.state.counter.map((cnt)=>{
               cnt.value = ((cnt.id === selectedItem.id) ? (cnt.value - 1): cnt.value); 
                     return cnt      });
              this.setState({counter : decrement});
       }
       
       filterArray(selectedItem) {
        return this.state.counter.filter((count)=> count.id !== selectedItem.id);
       }
    
    render() { 

        const {counter } = this.state;
        return ( <React.Fragment>
            <NavBar></NavBar>
           <div>counter List information</div> 
           <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
           {counter.map((cntDetail)=>
           <Counter key={cntDetail.id} count={cntDetail} userImage  onDelete ={this.handleDelete} onIncrement={this.handleIncrement} decrementCount ={this.handleDecrement}>
           <h4>{cntDetail.title}</h4>
           </Counter>
            )}
        </React.Fragment> );
    }
}
 
export default CounterList;