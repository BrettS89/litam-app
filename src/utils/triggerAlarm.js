import { getIsoDate } from './date';
import { getAlarmMessage } from '../lib/api';
import store from '../redux'; 
import { SOUND_ALARM } from '../redux/actions'; 

export default async (alarm) => {
  const date = getIsoDate();
  if (alarm.rang.includes(date)) return null;
  try {
    const { alarmMessage } = await getAlarmMessage(alarm._id);
    console.log('success!');
    store.dispatch({ type: SOUND_ALARM, payload: alarmMessage });
  } catch(e) {
    console.log('triggerAlarm error', e)
  }
  console.log('ROMG! ROMG! ROMG!');
  return true;
};
