import {
  SCREEN_CHANGED
} from './AppActionTypes';

export const screenChanged = (prevScreen, currentScreen) => {
  return (dispatch) => {
    let screenDetails = {
      prevScreen,
      currentScreen
    };
    dispatch({
      type: SCREEN_CHANGED,
      payload: screenDetails
    });
  }
};