import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Txt from '../Txt';
import Alarm from './components/alarm';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../shared/styles/colors';

const MyAlarmsView = ({ navigateToAddAlarm }) => {
  return (
    <View style={styles.container}>
      <Alarm />
      <Alarm />
      <Alarm />
      <View style={styles.addAlarmButtonView}>
        <TouchableOpacity style={styles.addAlarmButton} onPress={navigateToAddAlarm}>
          <Icon name="plus" size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAlarmsView;
