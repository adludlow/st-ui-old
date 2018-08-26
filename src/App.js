import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainMenu from './components/NavMenu';
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
        <div className="App wrapper">
          <MainMenu />
        </div>
      );
    }
  }
}

export default App;
