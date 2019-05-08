import constants from "../../../../constants";

const INITIAL_STATE = {
  viewType: constants.VIEW_TYPE.PROGRESS_VIEW,
  upcomingEvent: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch(action.type) {
    default:
      newState = state;
  }
  return newState;
}