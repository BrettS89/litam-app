import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Txt from '../../Txt';
import styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../shared/styles/colors'

const Day = ({ day, setRepeat }) => {
  function displayRepeat() {
    if (day.repeat) {
      return (
        <TouchableOpacity onPress={() => setRepeat(day.day)}>
          <Icon name="checkbox-blank-circle" size={25} color={colors.main} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => setRepeat(day.day)}>
        <Icon name="checkbox-blank-circle-outline" size={25} color={colors.main} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.day}>
      <Txt moreStyles={styles.dayText}>Repeats every {day.day}</Txt>
      {displayRepeat()}
    </View>
  );
};

export default Day;
