import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../shared/styles/colors';

const Txt = ({ children, moreStyles }) => {
  return (
    <Text style={[styles.text, moreStyles]}>
      {children}
    </Text>
  );
};

export default Txt;

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: colors.white,
  }
});
