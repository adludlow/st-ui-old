import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Team from './components/Team';
import LoginContainer from './components/Login.container';
import { Admin } from './components/Admin';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component = {Team} />
            <Route path="/login" component = {LoginContainer} />
            <Route path="/admin" component = {Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
