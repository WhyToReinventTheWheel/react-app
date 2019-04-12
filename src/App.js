import React, { Component } from 'react';
import './App.css';
import Main from './Components/01-basics/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React.</h1>
        <Main/>
      </div>
    );
  }
}

export default App;
