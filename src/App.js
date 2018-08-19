import React, { Component } from 'react';
import Team from './components/Team';
import LoginContainer from './components/Login.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
