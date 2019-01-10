import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'reducers';
import { Admin } from './components/Admin';

const store = createStore(reducers, {});

  ReactDOM.render(
    <Provider {...{ store }}>
      <Admin />
    </Provider>,
    document.getElementById('root'));
