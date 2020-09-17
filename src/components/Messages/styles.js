import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 15,
},
  message: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  userPhoto: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 13
  },
  contentContainer: {
    flex: 1,
    marginTop: 0
  },
  nameText: {
    color: colors.main,
    fontWeight: '800',
    fontSize: 17,
    marginBottom: 4
  },
  notificationText: {
    fontWeight: '800',
    marginBottom: 10
  },
  messageText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: .5
  }
});
