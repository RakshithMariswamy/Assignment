import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import DashBoard from './dashBoard/dashBoard';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
          <Router>
            <div>
               <Route path="/" exact component={Login} />
               <Route path="/dashboard" component={DashBoard} />
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
