import { SET_SONGS } from '../actions';

const INITIAL_STATE = {
  songs: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_SONGS:
      return {
        ...state,
        songs: payload,
      };

    default:
      return state;
  }
};
