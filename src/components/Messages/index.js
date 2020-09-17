import React from 'react';
import { useSelector } from 'react-redux';
import View from './view';

const Messages = props => {
  const messages = useSelector(state => state.messages.messages);

  return (
    <View
      messages={messages}
    />
  );
};

export default Messages;
