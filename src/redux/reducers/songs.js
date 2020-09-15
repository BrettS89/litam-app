import { SET_SONGS, SET_SONG_ID, SET_ALARM_ID } from '../actions';

const INITIAL_STATE = {
  alarmId: null,
  songs: [],
  songId: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_ALARM_ID:
      return {
        ...state,
        alarmId: payload,
      };

    case SET_SONGS:
      return {
        ...state,
        songs: payload,
      };

    case SET_SONG_ID:
      return {
        ...state,
        songId: payload,
      };

    default:
      return state;
  }
};
