import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'
import './App.css';
import {
  ContainerFluid
} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
