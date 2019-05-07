import { combineReducers } from 'redux';
import homeReducer from './src/screens/home/reducers/homeReducer';
import AppReducer from './src/screens/AppReducer';

export default combineReducers({
  home: homeReducer,
  screenDetails: AppReducer
});