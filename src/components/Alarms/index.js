import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ALARM_ID } from '../../redux/actions';
import View from './view';

const Alarms = props => {
  const dispatch = useDispatch();
  const alarms = useSelector(state => state.alarms.alarms);

  useEffect(() => {

  }, []);

  function navigateToPickSong(alarmId) {
    console.log(alarmId);
    dispatch({ type: SET_ALARM_ID, payload: alarmId })
    props.navigation.navigate('PickSong');
  }

  return (
    <View
      alarms={alarms}
      navigateToPickSong={navigateToPickSong}
    />
  );
};

export default Alarms;
