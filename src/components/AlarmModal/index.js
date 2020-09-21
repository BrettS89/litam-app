import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import audio from '../../utils/Audio';
import { STOP_ALARM } from '../../redux/actions';
import { stopAlarm } from '../../lib/api';

const AlarmModal = props => {
  const dispatch = useDispatch();
  const alarmState = useSelector(state => state.alarms);
  
  useEffect(() => {
    playAudio();
  }, [alarmState]);

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

  return (
    <View
      alarmState={alarmState}
      wakeUp={wakeUp}
    />
  );
};

export default AlarmModal;
