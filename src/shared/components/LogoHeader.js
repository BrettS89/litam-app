import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { LOGO } from '../../../assets/images';

const LogoHeader = props => {
  return (
    <SafeAreaView>
      <Image source={LOGO} resizeMode="contain" style={styles.logo} />
    </SafeAreaView>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  logo: {
    width: 75,
    height: 45
  }
});
