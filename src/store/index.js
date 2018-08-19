import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from '../reducers';

function reduxStore(initialState) {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(promise, thunk)
  );
   return store;
}

export default reduxStore;
