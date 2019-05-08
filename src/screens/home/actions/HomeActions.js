import { OCNetworkHandler } from "../../../utils/network/OCNetworkHandler";
import { EVENTS, FEEDS } from "../constants/HomeNetworkConstants";
import {
  FETCH_UPCOMING_EVENT,
  FETCH_UPCOMING_EVENT_SUCCESS,
  FETCH_UPCOMING_EVENT_FAIL,
  FETCH_FEEDS,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAIL
} from "../constants/HomeActionTypes";
import { SUCCESS_STATUS_CODE } from "../../../utils/network/NetworkConstants";

export const fetchUpcomingEvent = () => {
  return dispatch => {
    dispatch({
      type: FETCH_UPCOMING_EVENT
    });
    OCNetworkHandler.get(`${EVENTS}`)
      .then(response => {
        if (response.data.statusCode === SUCCESS_STATUS_CODE) {
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
        console.log("unable to fetch upcoming events");
        dispatch({
          type: FETCH_UPCOMING_EVENT_FAIL,
          payload: error
        });
      });
  };
};

export const fetchFeeds = () => {
  return dispatch => {
    dispatch({
      type: FETCH_FEEDS
    });
    OCNetworkHandler.get(`${FEEDS}`)
      .then(response => {
        if(response.data.statusCode === SUCCESS_STATUS_CODE) {
          dispatch({
            type: FETCH_FEEDS_SUCCESS,
            payload: response.data.data
          });
        } else {
          dispatch({
            type: FETCH_FEEDS_FAIL,
            payload: response.message
          });
        }
      })
      .catch(error => {
        console.log('Unable to fetch feeds', error);
        dispatch({
          type: FETCH_FEEDS_FAIL,
          payload: error
        });
      });
  };
};
