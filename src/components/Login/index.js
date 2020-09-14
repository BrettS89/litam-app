import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ON_LOGIN } from '../../redux/actions';
import colors from '../../shared/styles/colors';
import Input from '../../shared/components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    dispatch({ type: ON_LOGIN, payload: { form: { email, password }, navigate, } });
  }

  function navigate() {
    props.navigation.navigate('MyAlarms');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Input
          labelText="email"
          placeholder="Email"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="password"
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          {/* <View style={styles.buttonBackground}> */}
            <Icon name="arrow-right-circle" size={60} color={colors.main} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
