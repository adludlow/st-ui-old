import { login } from '../constants/'
import { loadState } from '../localStorage';

let userDetails = loadState('userDetails') || '';
let isLoggedIn = loadState('isLoggedIn') || false;

const initialState = {
  isLoggedIn: isLoggedIn,
  userDetails: userDetails
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case login.SUCCESS:
      {
        console.log('Login success');
        return {
          isLoggedIn: true,
          userDetails: action.userDetails
        };
      }
    case login.FAILURE:
      {
        return {
          isLoggedIn: false,
          loginError: action.error
        };
      }
  }
  return state;

}
