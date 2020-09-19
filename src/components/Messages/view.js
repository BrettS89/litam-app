import React from 'react';
import { View, FlatList } from 'react-native';
import Txt from '../Txt';
import LogoHeader from '../../shared/components/LogoHeader';
import Message from './components/message';
import styles from './styles';

const MessagesView = ({ messages }) => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <FlatList
        data={messages}
        keyExtractor={message => message._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Message message={item} />
        )}
      />
      {/* <Message />
      <Message />
      <Message />
      <Message /> */}
    </View>
  );
};

export default MessagesView;
