import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear }) => {

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.black}
        style={styles.textInput}
        value={clear ? '' : value}
        keyboardType={'default'}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
        multiline = {true}
        numberOfLines={10}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: colors.black,
    fontSize: 19,
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  container: {
    height: 140,
    backgroundColor: '#c4c4c4',
    paddingHorizontal: 10,
    borderRadius: 3
  }
});

export default Input;
