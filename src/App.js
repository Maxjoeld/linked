import React, { Component } from 'react';
import SearchBar from './Componenets/SearchBar/SearchBar';
import Navbar from './Componenets/Navbar/Navbar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="header">
        <Navbar />
        </div>
      </div>
    );
  }
}
export default App;



// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
