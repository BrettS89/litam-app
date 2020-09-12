import React from 'react';
import { useSelector } from 'react-redux';
import View from './view';

const MyAlarms = props => {
  const alarms = useSelector(state => state.alarms.alarms);

  function navigateToAddAlarm() {
    props.navigation.navigate('AddAlarm');
  }

  return (
    <View
      navigateToAddAlarm={navigateToAddAlarm}
      alarms={alarms}
    />
  );
};

export default MyAlarms;
