import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';

const reducers = {
    loginReducer,
    form: formReducer
};

export default combineReducers(reducers);
