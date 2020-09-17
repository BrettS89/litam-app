import { SET_MESSAGES } from '../actions';

const INITIAL_STATE = {
  messages: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };

    default:
      return state;
  }
};
