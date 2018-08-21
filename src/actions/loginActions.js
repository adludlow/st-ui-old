import axios from 'axios';
import { login } from '../constants/'
import config from '../config/'
import { saveState } from '../localStorage';

export function loginSuccess(token) {
  saveState('token', token);
  saveState('isLoggedIn', true);
  return {
    type: login.SUCCESS,
    token
  };
}

export function loginFailure(error) {
  return {
    type: login.FAILURE,
    error
  };
}

export function doLogin(creds) {
  const { username, password } = creds;
  const authStr = 'Basic ' + window.btoa(username+':'+password);

  return function(dispatch) {
    // TODO Send progress action
    return axios.get(config.LOGIN_URL, 
      {
        headers: {
          'Authorization': authStr
        }
      }
    ).then((res) => {
      if(res.status === 200) {
        const token = res.data;
        dispatch(loginSuccess(token));
      }
      else {
        dispatch(loginFailure('Invalid username or password'));
      }
    });
  }
}
