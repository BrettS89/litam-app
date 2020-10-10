import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALARMS, SOUND_ALARM, STOP_ALARM, SET_MY_ALARMS, CLOSE_ALARM_MODAL, OPEN_ALARM_MODAL } from '../actions';

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
      };

    case CLOSE_ALARM_MODAL:
      return {
        ...state,
        alarmModalOpen: false,
      };

    case OPEN_ALARM_MODAL:
      return {
        ...state,
        alarmModalOpen: true,
        alarmMessage: {
          ...state.alarmMessage,
          id: uuidv4(),
        }
      };

    default:
      return state;
  }
};
