import {
  SCREEN_CHANGED
} from './AppActionTypes';

const INITIAL_STATE = {
  screenDetails: {
    prevScreen: {},
    currentScreen: {}
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SCREEN_CHANGED:
      return { ...state, screenDetails: action.payload };
    default:
      return state;
  }
}