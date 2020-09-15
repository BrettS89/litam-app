import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SUBMIT_ALARM_MESSAGE } from '../../redux/actions';
import View from './view';

const WriteMessage = props => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

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
