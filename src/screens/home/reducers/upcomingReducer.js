import constants from "../../../../constants";
import {
  FETCH_UPCOMING_EVENT,
  FETCH_UPCOMING_EVENT_SUCCESS,
  FETCH_UPCOMING_EVENT_FAIL
} from "../constants/HomeActionTypes";

const INITIAL_STATE = {
  viewType: constants.VIEW_TYPE.PROGRESS_VIEW,
  upcomingEvent: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch (action.type) {
    case FETCH_UPCOMING_EVENT:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.PROGRESS_VIEW
      };
      break;
    case FETCH_UPCOMING_EVENT_SUCCESS:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.MAIN_VIEW,
        upcomingEvent: action.payload
      };
      break;
    case FETCH_UPCOMING_EVENT_FAIL:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.ERROR_VIEW
      };
      break;
    default:
      newState = state;
  }
  return newState;
};
