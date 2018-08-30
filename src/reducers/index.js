import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import mainMenuReducer from './mainMenuReducer';
import adminReducer from './adminReducer';

const reducers = {
    loginReducer,
    mainMenuReducer,
    adminReducer,
    form: formReducer
};

export default combineReducers(reducers);
