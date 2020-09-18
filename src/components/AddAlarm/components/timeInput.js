import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const TimeInput = ({ placeholder, value, onChangeText, autoFocus }) => {
  return (
    <View style={{ height: 50 }}>
      <TextInput 
        placeholderTextColor={'darkgrey'}
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        maxLength={2}
        autoFocus={autoFocus}
        returnKeyType={'done'}
      />
    </View>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  textInput: {
    color: colors.white,
    fontSize: 52,
    fontWeight: '800',
    // flex: 5,
  },
});
