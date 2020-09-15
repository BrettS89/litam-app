import { SET_ALARMS, SOUND_ALARM, STOP_ALARM, SET_MY_ALARMS } from '../actions';

const INITIAL_STATE = {
  alarmModalOpen: false,
  alarmMessage: {},
  alarms: [],
  myAlarms: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_MY_ALARMS:
      return {
        ...state,
        myAlarms: payload,
      }

    case SET_ALARMS:
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
