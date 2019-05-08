import { OCNetworkHandler } from "../../../utils/network/OCNetworkHandler";
import { EVENTS } from "../constants/HomeNetworkConstants";
import { FETCH_UPCOMING_EVENT, FETCH_UPCOMING_EVENT_SUCCESS, FETCH_UPCOMING_EVENT_FAIL } from "../constants/HomeActionTypes";
import { SUCCESS_STATUS_CODE } from "../../../utils/network/NetworkConstants";

export const fetchUpcomingEvent = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_UPCOMING_EVENT
    });
    OCNetworkHandler.get(`${EVENTS}`)
    .then(response => {
      console.log('event details fetched: ', response);
      if(response.data.statusCode === SUCCESS_STATUS_CODE) {
        dispatch({
          type: FETCH_UPCOMING_EVENT_SUCCESS,
          payload: response.data.data
        });
      } else {
        dispatch({
          type: FETCH_UPCOMING_EVENT_FAIL,
          payload: response.message
        });
      }
    })
    .catch(error => {
      console.log('unable to fetch upcoming events');
      dispatch({
        type: FETCH_UPCOMING_EVENT_FAIL,
        payload: error
      });
    })
  }
}

export const fetchIPFeed = () => {
  return (dispatch) => {

  }
};