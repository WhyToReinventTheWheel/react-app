import React, { Component } from 'react';
import './App.css';
//import Main from './Components/01-basics/main'
import Main from './Components/02-list/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App.js Now calling Component.</h1>
        <Main />
      </div>
    );
  }
}

export default App;
