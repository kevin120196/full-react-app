import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import Main from './Component/Github/Main';
import Data from "./Component/Github/Data";
import Specific from "./Component/Github/Specific";
import {  BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
      <React.Fragment>
        <Nav/>
          <Router>
          <Route exact path='/' component={ Main } />
          <Route exact path='/Specific/:login' component={ Specific } />
          <Route exact path='/Data/:id' component={ Data } />

          </Router>
      </React.Fragment>
    </>
    );
  }
}

export default App;