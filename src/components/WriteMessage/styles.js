import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
  },
  input: {
    marginBottom: 30,
  },
  buttonStyle: {
    width: 200,
    height: 45,
  },
  buttonView: {
    // alignItems: 'center',
  }
});
