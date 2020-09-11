import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    // marginBottom: 30,
  },
  buttonStyle: {
    marginBottom: 15,
    width: 175,
  }
});
