import React from 'react';
import { View, Switch, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Txt from '../../Txt';
import colors from '../../../shared/styles/colors';
import Icon from 'react-native-vector-icons/Entypo';

const Alarm = ({ alarm, toggleActive, toggleModal }) => {
  const days = [
    { day: 'Sun', letter: 'S' },
    { day: 'Mon', letter: 'M' },
    { day: 'Tue', letter: 'T' },
    { day: 'Wed', letter: 'W' },
    { day: 'Thu', letter: 'T' },
    { day: 'Fri', letter: 'F' },
    { day: 'Sat', letter: 'S' },
  ];
  function renderDays() {
    return days.map(d => {
      if (alarm.days.includes(d.day) || alarm.day === d.day) {
        return (
          <Txt key={d.day} moreStyles={styles.dayIncluded}>{d.letter}</Txt>
        );
      }
      return (
        <Txt key={d.day} moreStyles={styles.day}>{d.letter}</Txt>
      );
    });
  }

  function toggleAlarmActive() {
    toggleActive(alarm._id);
  }

  function toggleAlarmModal() {
    toggleModal(alarm._id)
  }

  return (
    <View style={styles.alarm}>
      <View style={styles.time}>
        <Txt moreStyles={styles.timeText}>
          {alarm.displayTime}
        </Txt>
        <View style={{ justifyContent: 'flex-end' }}>
          <Txt moreStyles={styles.ampmText}>
            {alarm.amPm}
          </Txt>
        </View>
      </View>
      <View style={styles.days}>
        {renderDays()}
      </View>
      <View style={styles.right}>
        <Switch
          trackColor={{ false: "#767577", true: colors.main }}
          value={alarm.active}
          onValueChange={toggleAlarmActive}
        />
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={toggleAlarmModal}>
          <Icon name="dots-three-vertical" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Alarm;

