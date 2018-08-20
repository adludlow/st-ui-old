import axios from 'axios';
import { login } from '../constants/'
import config from '../config/'

export function loginSuccess(userDetails) {
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
        // TODO store logged in user details in local storage.
      }
      else {
        dispatch(loginFailure('Invalid username or password'));
      }
    });
  }
}
