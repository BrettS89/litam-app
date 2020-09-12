import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';
import alarmsReducer from './alarms';

export default combineReducers({
  user: userReducer,
  app: appReducer,
  alarms: alarmsReducer,
});
