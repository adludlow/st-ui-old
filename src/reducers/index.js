import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import mainMenuReducer from './mainMenuReducer';

const reducers = {
    loginReducer,
    mainMenuReducer,
    form: formReducer
};

export default combineReducers(reducers);
