import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from './components/Login.container';
import './index.css';
import AppContainer from './App.container';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Admin } from './components/Admin';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={AppContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path="/admin" component = {Admin} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
