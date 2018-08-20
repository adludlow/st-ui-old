import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Team from './components/Team';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);


    //TODO get logged in user details from local storage.
  };

  render() {
    if(this.props.isLoggedIn === false) {
      return <Redirect to='/login' />;
    }
    else {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Team}/>
              <Route path="/team" component={Team}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default App;
