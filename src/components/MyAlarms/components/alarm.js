import React from 'react';
import { View, Switch, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Txt from '../../Txt';
import colors from '../../../shared/styles/colors';
import Icon from 'react-native-vector-icons/Entypo';

const Alarm = props => {
  return (
    <View style={styles.alarm}>
      <View style={styles.time}>
        <Txt moreStyles={styles.timeText}>
          7:00
        </Txt>
        <View style={{ justifyContent: 'flex-end' }}>
          <Txt moreStyles={styles.ampmText}>
            AM
          </Txt>
        </View>
      </View>
      <View style={styles.days}>
        <Txt moreStyles={styles.day}>S</Txt>
        <Txt moreStyles={styles.day}>M</Txt>
        <Txt moreStyles={styles.day}>T</Txt>
        <Txt moreStyles={styles.day}>W</Txt>
        <Txt moreStyles={styles.day}>T</Txt>
        <Txt moreStyles={styles.day}>F</Txt>
        <Txt moreStyles={styles.day}>S</Txt>
      </View>
      <View style={styles.right}>
        <Switch
          trackColor={{ false: "#767577", true: colors.main }}
          value={true}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Icon name="dots-three-vertical" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Alarm;

