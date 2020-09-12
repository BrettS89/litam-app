import { SET_ALARM } from '../actions';

const INITIAL_STATE = {
  alarms: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_ALARM:
      return {
        ...state,
        alarms: payload,
      };

    default:
      return state;
  }
}
