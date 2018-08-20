import axios from 'axios';
import { login } from '../constants/'
import config from '../config/'
import { saveState } from '../localStorage';

export function loginSuccess(userDetails) {
  saveState('userDetails', userDetails);
  saveState('isLoggedIn', true);
  return {
    type: login.SUCCESS,
    userDetails
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
    console.log('doLogin');
    // TODO Send progress action
    return axios.get(config.LOGIN_URL, 
      {
        headers: {
          'Authorization': authStr
        }
      }
    ).then((res) => {
      console.log('Response received.');
      if(res.status === 200) {
        const userDetails = res.data;
        dispatch(loginSuccess(userDetails));
      }
      else {
        dispatch(loginFailure('Invalid username or password'));
      }
    });
  }
}
