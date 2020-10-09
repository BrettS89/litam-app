import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import Logo from '../../shared/components/Logo';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Logo />
      </View>
      
      <Button text="Sign up" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Registration')} />
      <Button text="Login" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
