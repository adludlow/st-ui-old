import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Admin } from './components/Admin';

window.onLoad = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component = {Admin} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
}
