import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';
import alarmsReducer from './alarms';
import songsReducer from './songs';
import messagesReducer from './messages';

export default combineReducers({
  user: userReducer,
  app: appReducer,
  alarms: alarmsReducer,
  songs: songsReducer,
  messages: messagesReducer,
});
