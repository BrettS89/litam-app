import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.black,
    paddingHorizontal: 40,
    paddingVertical: 30
  },
  inputView: {
    marginBottom: 5,
  },
  loginButton: {
    alignItems: 'flex-end',
  }
});
