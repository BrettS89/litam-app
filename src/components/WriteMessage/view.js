import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import Txt from '../Txt';
import TextBox from '../../shared/components/TextBox';

const WriteMessageView = ({ setMessage, submitAlarmMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextBox
          placeholder="Send a message with this alarm... (Optional)"
          onChangeText={e => setMessage(e)}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          buttonStyle={styles.buttonStyle}
          text="Finish"
          onPress={submitAlarmMessage}
        />
      </View>
    </View>
  );
};

export default WriteMessageView;
