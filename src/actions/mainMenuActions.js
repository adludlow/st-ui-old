import {mainMenu} from '../constants/';

export function toggleMainMenu(menuStatus = true, meta = {}) {
  return {
    type: mainMenu.TOGGLE,
    menuStatus,
    meta
  };
}