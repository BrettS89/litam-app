import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Txt from '../../Txt';
import { USER_DEFAULT } from '../../../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../shared/styles/colors';

const Alarm  = ({ alarm, alarm: { user }, navigateToPickSong }) => {
  const renderProfilePhoto = () => {
    return user.photo
      ? <Image source={{ uri: user.photo }} style={styles.userPhoto} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.userPhoto} />
  };

  return (
    <View style={styles.alarm}>
      <View style={styles.userSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {renderProfilePhoto()}
          <View>
            <Txt moreStyles={styles.username}>
              @{user.userName}
            </Txt>
            <Txt moreStyles={styles.alarmText}>
              Set an alarm for {alarm.day} {alarm.displayTime} {alarm.amPm}
            </Txt>
            <Txt moreStyles={styles.cta}>
              Pick the song this alarm will play ->
            </Txt>
          </View>
        </View>
        <TouchableOpacity onPress={navigateToPickSong}>
          <Icon name="alarm-note" size={50} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Alarm;
