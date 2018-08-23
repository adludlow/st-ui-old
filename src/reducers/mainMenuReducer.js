import {mainMenu} from '../constants/';

const initialState = {
  menuStatus: true
};

export default function mainMenuReducer(state = initialState, action) {
  switch (action.type) {
    case mainMenu.TOGGLE:
    {
      return {
        ...state,
        menuStatus: action.menuStatus
      };
    }
  }
  return state;
}