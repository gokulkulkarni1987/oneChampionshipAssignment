import constants from "../../../../constants";
import { FETCH_FEEDS, FETCH_FEEDS_SUCCESS, FETCH_FEEDS_FAIL } from "../constants/HomeActionTypes";

const INITIAL_STATE = {
  viewType: constants.VIEW_TYPE.PROGRESS_VIEW,
  feeds: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch(action.type) {
    case FETCH_FEEDS:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.PROGRESS_VIEW
      };
      break;
    case FETCH_FEEDS_SUCCESS:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.MAIN_VIEW,
        feeds: action.payload
      };
      break;
    case FETCH_FEEDS_FAIL:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.ERROR_VIEW
      };
      break;
    default:
      newState = state;
  }
  return newState;
}