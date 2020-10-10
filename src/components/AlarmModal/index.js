import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import audio from '../../utils/Audio';
import { CLOSE_ALARM_MODAL, ON_SNOOZE, STOP_ALARM } from '../../redux/actions';
import { stopAlarm } from '../../lib/api';

const AlarmModal = props => {
  const dispatch = useDispatch();
  const alarmState = useSelector(state => state.alarms);

  useEffect(() => {
    console.log('innn');
    playAudio();
  }, [alarmState.alarmMessage]);

  async function playAudio() {
    if (alarmState.alarmMessage.song && alarmState.alarmMessage.playAudio) {
      await audio.unloadAsync();
      await audio.loadAsync({ uri: alarmState.alarmMessage.song.audio });
      await audio.setIsLoopingAsync(true);
      await audio.playAsync();
    }
  }

  async function wakeUp() {
    stopAlarm(alarmState.alarmMessage._id);
    await audio.unloadAsync();
    dispatch({ type: STOP_ALARM });
  }

  async function snooze() {
    stopAlarm(alarmState.alarmMessage._id);
    dispatch({ type: CLOSE_ALARM_MODAL });
    await audio.pauseAsync();
    await audio.unloadAsync();
    dispatch({ type: ON_SNOOZE });
  }

  return (
    <View
      alarmState={alarmState}
      wakeUp={wakeUp}
      snooze={snooze}
    />
  );
};

export default AlarmModal;
