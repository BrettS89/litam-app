import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Back from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';

const HeaderBack = ({ navigation, screen, moreStyles={} }) => {
  return (
    <TouchableOpacity style={[styles.button, moreStyles]} onPress={() => navigation.navigate(screen)}>
      <Back name="arrow-left" size={32} color={colors.main} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  }
});

export default withNavigation(HeaderBack);
