import React from 'react';
import { View, Image } from 'react-native';
import Txt from '../../Txt';
import styles from '../styles';
import { USER_DEFAULT } from '../../../../assets/images';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Fontisto';
import colors from '../../../shared/styles/colors';

const Message = ({ message }) => {
  const image = message.user.photo
    ? <Image source={{ uri: message.user.photo }} style={styles.userPhoto} />
    : <Image source={USER_DEFAULT} style={styles.userPhoto} />;

  return (
    <View style={styles.message}>
      <View>
        {image}
      </View>
      <View style={styles.contentContainer}>
        <Txt moreStyles={styles.nameText}>
          @{message.user.userName}
        </Txt>
        <Txt moreStyles={styles.notificationText}>
          Sent you an alarm message
        </Txt>
        <Txt moreStyles={styles.messageText}>
          "{`${message.message}`}"
        </Txt>
      </View>
    </View>
  );
};

export default Message;
