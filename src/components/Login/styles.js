import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.black,
    paddingHorizontal: 40,
    paddingVertical: 50
  },
  inputView: {
    marginBottom: 20,
  },
  buttonBackground: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 50,
    backgroundColor: colors.white,
  },
  loginButton: {
    alignItems: 'flex-end',
  }
});
