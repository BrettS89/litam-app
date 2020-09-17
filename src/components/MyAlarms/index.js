import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { TOGGLE_ACTIVE, DELETE_ALARM } from '../../redux/actions';

const MyAlarms = props => {
  const alarms = useSelector(state => state.alarms.myAlarms);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [alarmId, setAlarmId] = useState(null);

  function navigateToAddAlarm() {
    props.navigation.navigate('AddAlarm');
  }

  function toggleActive(alarmId) {
    dispatch({ type: TOGGLE_ACTIVE, payload: alarmId });
  }

  function toggleModal(id) {
    setModalOpen(!modalOpen);
    setAlarmId(id);
  }

  function deleteAlarm() {
    dispatch({ type: DELETE_ALARM, payload: alarmId });
    toggleModal(null);
  }

  return (
    <View
      navigateToAddAlarm={navigateToAddAlarm}
      alarms={alarms}
      toggleActive={toggleActive}
      modalOpen={modalOpen}
      toggleModal={toggleModal}
      deleteAlarm={deleteAlarm}
    />
  );
};

export default MyAlarms;
