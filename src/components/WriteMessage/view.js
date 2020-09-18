import React from 'react';
import { View, ScrollView, Keyboard } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import TextBox from '../../shared/components/TextBox';

const WriteMessageView = ({ setMessage, submitAlarmMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextBox
          placeholder="Send a message with this alarm... (Optional)"
          onChangeText={e => setMessage(e)}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <ScrollView style={styles.buttonView} scrollEnabled={false} contentContainerStyle={{ alignItems: 'center' }} keyboardShouldPersistTaps="always">
        <Button
          buttonStyle={styles.buttonStyle}
          text="Finish"
          onPress={submitAlarmMessage}
        />
      </ScrollView>
    </View>
  );
};

export default WriteMessageView;
