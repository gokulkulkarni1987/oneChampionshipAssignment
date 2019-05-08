import { combineReducers } from 'redux';
import homeReducer from './src/screens/home/reducers/homeReducer';
import AppReducer from './src/screens/AppReducer';
import upcomingReducer from './src/screens/home/reducers/upcomingReducer';

export default combineReducers({
  home: homeReducer,
  screenDetails: AppReducer,
  upcomingEvent: upcomingReducer
});