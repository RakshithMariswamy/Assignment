import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route,withRouter,Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Login from './Login/Login';
import DashBoard from './dashBoard/dashBoard';
import AddItemcategories from './AddItemcategories/AddItemcategories';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>    
          <Router>
            <div>
            <Switch>
               <Route path="/" exact component={withRouter(Login)}/>
               <Route path="/dashboard" component={withRouter(DashBoard)}/>
               <Route path="/selectitem/:itemId" component={withRouter(AddItemcategories)}/>
            </Switch>
            </div>
          </Router>   
      </Provider>
      </div>
    );
  }
}

export default App;

/**<Navbar totalCount={this.state.counter.filter((cnt)=> cnt.value > 0).length}></Navbar>
          <main className="container">
            <CounterList counter={this.state.counter} onDelete={this.handleDelete}  onIncrement ={this.handleIncrement}  decrementCount ={this.handleDecrement}></CounterList>
          </main> */
