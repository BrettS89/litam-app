import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LOGO } from '../../../assets/images';

const Logo = ({ width, moreStyles={} }) => {
  return (
    <View>
      <Image source={LOGO} resizeMode="contain" style={[{ width: width ? width : 150 }, moreStyles]} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 150,
  }
});