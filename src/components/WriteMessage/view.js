import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import Txt from './styles';

const WriteMessageView = props => {
  return (
    <View>
      <Txt>Write message</Txt>
    </View>
  );
};

export default WriteMessageView;
