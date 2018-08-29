import React, { Component } from 'react';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';

import MainMenu from './components/NavMenu';
import Trade from './components/Trade';
import Admin from './components/Admin';
import Draft from './components/Draft';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    // TODO check token validity? Or we can rely on a 401 from an API call to determine that.
    if(this.props.isLoggedIn === false) {
      return <Redirect to='/login' />;
    }
    else {
      return (
        <BrowserRouter>
          <div className="App wrapper">
              <MainMenu/>
              <Route path='/trade' component={Trade}/>
              <Route path='/draft' component={Draft}/>
              <Route path='/admin' component={Admin}/>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
