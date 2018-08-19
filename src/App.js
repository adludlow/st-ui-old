import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Team from './components/Team';
import LoginContainer from './components/Login.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component = {Team} />
            <Route path="/login" component = {LoginContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
