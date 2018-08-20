import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from './components/Login.container';
import './index.css';
import AppContainer from './App.container';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AppContainer}/>
          <Route path='/login' component={LoginContainer}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
