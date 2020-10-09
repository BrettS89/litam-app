import React, { useState } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { ON_REGISTER } from '../../redux/actions';
import colors from '../../shared/styles/colors';
import Input from '../../shared/components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Registration = props => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    dispatch({ 
      type: ON_REGISTER,
      payload: { 
        form: { 
          email,
          password,
          firstName,
          lastName,
          userName
        },
        navigate,
      }
    });
  }

  function navigate() {
    props.navigation.navigate('MyAlarms');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Input
          labelText="firstname"
          placeholder="First name"
          onChangeText={setFirstName}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="lastname"
          placeholder="Last name"
          onChangeText={setLastName}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="username"
          placeholder="Username"
          onChangeText={setUserName}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="email"
          placeholder="Email"
          onChangeText={setEmail}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="password"
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          onSubmitHandler={onSubmit}
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

export default Registration;
