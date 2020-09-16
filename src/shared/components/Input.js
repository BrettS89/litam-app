import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import colors from '../styles/colors';

const Input = ({ labelText, value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear, type, maxLength=50, newStyles={} }) => {

  const displayIcon = () => {
    if(labelText === 'email') {
      return <Icon name="user-circle" size={26} color={colors.white} />;
    }
    if(labelText === 'password') {
      return <Icon name="unlock-alt" size={28} color={colors.white} style={{ marginLeft: 2 }} />;
    }
    if(labelText === 'firstname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />;
    }
    if(labelText === 'lastname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />;
    }
    if (labelText === 'card') {
      return <Icon2 name="credit-card" size={24} color="lightgray" />;
    }
    if (labelText === 'date') {
      return <Icon2 name="calendar-alt" size={24} color="lightgray" style={{ marginLeft: 2 }} />;
    }
    if (labelText === 'music') {
      return <Icon2 name="search" size={20} color={colors.white}  />;
    }
  };

  const renderKeyboardType = () => {
    if (type === 'email' || email) return 'email-address';
    if (type === 'number') return 'number-pad';
    return 'default';
  };

  const { label, textInput, container } = styles;
  return (
    <View style={[container, newStyles]}>
      <View style={[styles.label, { flex: labelText ? 1 : 0 }]}>
        {displayIcon()}
      </View>
      <TextInput
        placeholderTextColor={colors.white}
        secureTextEntry={secureTextEntry}
        style={[textInput, newStyles]}
        value={clear ? '' : value}
        keyboardType={renderKeyboardType()}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize={'none'}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
        maxLength={maxLength}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1
  },
  textInput: {
    color: colors.white,
    paddingRight: 3,
    fontSize: 15,
    fontWeight: '800',
    flex: 10,
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: 15
  }
});

export default Input;
