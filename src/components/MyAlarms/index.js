import React from 'react';
import View from './view';

const MyAlarms = props => {
  function navigateToAddAlarm() {
    props.navigation.navigate('AddAlarm');
  }

  return (
    <View
      navigateToAddAlarm={navigateToAddAlarm}
    />
  );
};

export default MyAlarms;
