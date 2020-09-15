import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';

const Alarms = props => {
  const alarms = useSelector(state => state.alarms.alarms);

  useEffect(() => {

  }, []);

  function navigateToPickSong() {
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
