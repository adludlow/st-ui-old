import { login } from '../constants/'

const initialState = {
  isLoggedIn: false,
  userDetails: ''
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
