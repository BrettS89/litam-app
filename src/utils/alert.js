import { Alert } from 'react-native';

export default (title, message) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Okay', onPress: () => console.log('OK Pressed') },
    ],
  );
};
