import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Txt from '../Txt';
import LogoHeader from '../../shared/components/LogoHeader';
import Alarm from './components/alarm';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../shared/styles/colors';
import DeleteAlarmModal from './components/deleteAlarmModal';

const MyAlarmsView = ({ navigateToAddAlarm, alarms, toggleActive, modalOpen, toggleModal, deleteAlarm }) => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <FlatList
        data={alarms}
        keyExtractor={alarm => alarm._id}
        renderItem={({ item }) => (
          <Alarm
            alarm={item}
            toggleActive={toggleActive}
            toggleModal={toggleModal}
          />
        )}
      />

      <View style={styles.addAlarmButtonView}>
        <TouchableOpacity style={styles.addAlarmButton} onPress={navigateToAddAlarm}>
          <Icon name="plus" size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
      <DeleteAlarmModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        deleteAlarm={deleteAlarm}
      />
    </View>
  );
};

export default MyAlarmsView;
