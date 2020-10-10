import { getIsoDate } from './date';
import { getAlarmMessage } from '../lib/api';
import store from '../redux'; 
import { SOUND_ALARM, REMOVE_ALARM_FROM_STATE, SNOOZE_RING, OPEN_ALARM_MODAL } from '../redux/actions'; 

export default async (alarm) => {
  const date = getIsoDate();
  if (alarm.rang.includes(date)) return null;
  try {
    console.log(alarm.snooze);
    if (alarm.snooze) {
      store.dispatch({ type: OPEN_ALARM_MODAL, payload: alarm })
      return true;
    }
    const { alarmMessage, removeAlarm, alarmId } = await getAlarmMessage(alarm._id);
    console.log('success!');
    store.dispatch({ type: SOUND_ALARM, payload: alarmMessage });
    if (removeAlarm) store.dispatch({ type: REMOVE_ALARM_FROM_STATE, payload: alarmId });
  } catch(e) {
    console.log('triggerAlarm error', e)
  }
  console.log('ROMG! ROMG! ROMG!');
  return true;
};
