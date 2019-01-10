import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import mainMenuReducer from './mainMenuReducer';
import adminReducer from './adminReducer';

const reducers = {
    loginReducer,
    mainMenuReducer,
    adminReducer
};

export default combineReducers(reducers);
