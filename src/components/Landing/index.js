import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import Logo from '../../shared/components/Logo';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo moreStyles={{ height: 75, marginBottom: 50 }} />
      <Button text="Sign up" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Registration')} />
      <Button text="Login" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
