import { SET_ALARM, SOUND_ALARM, STOP_ALARM } from '../actions';

const INITIAL_STATE = {
  alarmModalOpen: false,
  alarmMessage: {},
  alarms: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_ALARM:
      return {
        ...state,
        alarms: payload,
      };

    case SOUND_ALARM:
      return {
        ...state,
        alarmModalOpen: true,
        alarmMessage: payload,
      };
    
    case STOP_ALARM:
      return {
        ...state,
        alarmModalOpen: false,
        alarmMessage: {},
      }

    default:
      return state;
  }
}
