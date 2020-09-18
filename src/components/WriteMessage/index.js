import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SUBMIT_ALARM_MESSAGE } from '../../redux/actions';
import View from './view';
import audio from '../../utils/Audio';

const WriteMessage = props => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    audio.pauseAsync();
  });

  function submitAlarmMessage() {
    dispatch({ type: SUBMIT_ALARM_MESSAGE, payload: { message, navigate } });
  }

  function navigate() {
    props.navigation.navigate('Alarms');
  };

  return (
    <View
      setMessage={setMessage}
      submitAlarmMessage={submitAlarmMessage}
    />
  );
};

export default WriteMessage;
