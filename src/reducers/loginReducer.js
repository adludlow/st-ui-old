import { login } from '../constants/'

const initialState = {
  userDetails: ''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case login.SUCCESS:
      {
        return { userDetails: action.userDetails };
      }
    case login.FAULURE:
      {
        return { 
          ...state, 
          loginError: action.error 
        };
      }
  }
  return state;

}
