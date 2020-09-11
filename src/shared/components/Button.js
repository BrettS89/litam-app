import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const Button = ({ text, onPress, buttonStyle={}, textStyle={} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 50,
    paddingHorizontal: 19,
    height: 40,
  },
  text: {
    color: colors.white,
    fontWeight: '800',
  }
});
